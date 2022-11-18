import Configuration from './input/types';
import pLimit from 'p-limit';
import * as path from 'path';
import * as fs from 'fs';
import Axios from 'axios';
import { ArtifactUploadInput, CompletedPart } from './api/ionos-space-api';
import { createClient } from './api/axios';
import axiosRetry from 'axios-retry';
import { info } from '@actions/core';
import { Mutex } from 'async-mutex';
import * as tar from 'tar';
import { createGzip } from 'zlib';
import { pipeline } from 'stream';
import { promisify } from 'util';
import { getErrorMessage } from './util';

const FILE_CHUNK_SIZE = 10_000_000;

const limit = pLimit(20);

interface Part {
  url: string;
  blob: Buffer;
}

export async function uploadArtifact(configuration: Configuration): Promise<any> {
  const resolvedPath = fs.realpathSync(configuration.folder);
  if (!fs.existsSync(resolvedPath) || !fs.lstatSync(resolvedPath).isDirectory()) {
    throw new Error(`${configuration.folder} doesn't exist`);
  }

  info('Compress deployment');
  await tar.c(
    {
      file: 'deployment.tar',
      C: resolvedPath,
      prefix: 'deployment/',
      filter: (filePath) => path.basename(filePath) !== 'deployment.tar',
    },
    ['.']
  );
  if (configuration.configFile) {
    fs.copyFileSync(configuration.configFile, '.deploy-now/config.yaml');
    await tar.u({ file: 'deployment.tar' }, ['.deploy-now/config.yaml']);
  }
  const pipe = promisify(pipeline);
  await pipe(fs.createReadStream('deployment.tar'), createGzip(), fs.createWriteStream('deployment.tar.gz'));
  info('Deployment compressed');
  const file = fs.readFileSync('deployment.tar.gz');

  const client = createClient(configuration.serviceHost, configuration.apiKey);

  info('Initiate upload');
  const response = await client
    .prepareUpload(
      'me',
      configuration.projectId,
      configuration.branchId,
      configuration.version,
      new ArtifactUploadInput({ size: file.length })
    )
    .catch((error) => {
      throw new Error('Failed to initialize upload of deployment: ' + getErrorMessage(error));
    });
  const urls = response.data.urls;

  const axios = Axios.create();
  axiosRetry(axios, {
    retries: 3,
    retryDelay: (retryCount) => Math.pow(1.2, retryCount) * 1_000,
  });
  delete axios.defaults.headers.put['Content-Type'];

  const parts: Part[] = [];

  const mutex = new Mutex();
  let finished = 0;

  urls.forEach((url, index) => {
    const start = index * FILE_CHUNK_SIZE;
    const end = (index + 1) * FILE_CHUNK_SIZE;
    const blob = index < urls.length ? file.subarray(start, end) : file.subarray(start);

    parts.push({ url: url, blob: blob });
  });

  const resParts = await Promise.all(
    parts.map((part, index) =>
      limit(() => {
        const result = axios.put(part.url, part.blob).catch((error) => {
          throw new Error(`Failed to upload part ${index} of deployment: ` + getErrorMessage(error));
        });
        mutex.acquire().then(async (release) => {
          try {
            finished++;
            info(`Uploaded ${(finished / parts.length) * 100}%`);
          } finally {
            release();
          }
        });
        return result;
      })
    )
  );

  const completedParts = resParts.map(
    (part, index) =>
      new CompletedPart({
        number: index + 1,
        eTag: (part as any).headers.etag,
      })
  );

  await client
    .completeUpload('me', configuration.projectId, configuration.branchId, configuration.version, completedParts)
    .catch((error) => {
      throw new Error('Failed to inform Deploy Now of finished deployment upload: ' + getErrorMessage(error));
    });
  info('Completed upload');
}
