import Configuration from './input/types';
import { createClient } from './api/axios';
import * as https from 'https';
import { resolve } from 'path';
import * as fs from 'fs';
import { info } from '@actions/core';
import * as tar from 'tar';
import { getErrorMessage } from './util';

export async function downloadArtifact(configuration: Configuration): Promise<any> {
  const resolvedPath = resolve(configuration.folder);
  if (!fs.existsSync(resolvedPath)) {
    try {
      fs.mkdirSync(resolvedPath);
    } catch (error) {
      throw new Error('Failed to create target folder for download of stored deployment: ' + getErrorMessage(error));
    }
  }

  const client = createClient(configuration.serviceHost, configuration.apiKey);
  const response = await client
    .getArtifact('me', configuration.projectId, configuration.branchId, configuration.version)
    .catch((error) => {
      throw new Error('Failed to get download url for stored deployment: ' + getErrorMessage(error));
    });

  await https
    .get(response.data.url, (res) => {
      res.pipe(tar.x({ C: resolvedPath }));
    })
    .on('error', (err) => {
      throw new Error('Failed to download stored deployment: ' + err.message);
    });
  info('Artifact downloaded');
}
