import Configuration from './input/types';
import { uploadArtifact } from './upload';
import { downloadArtifact } from './download';
import { error } from '@actions/core';

export async function runAction(configuration: Configuration): Promise<any> {
  if (configuration.action === 'upload') {
    await uploadArtifact(configuration);
    return {};
  } else if (configuration.action === 'download') {
    await downloadArtifact(configuration);
    return {};
  } else {
    error(`Action ${configuration.action} is not supported`);
    return {};
  }
}
