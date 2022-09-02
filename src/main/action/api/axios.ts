import axios from 'axios';
import axiosRetry from 'axios-retry';
import { AxiosIonosSpaceArtifactApiClient } from './ionos-space-api';

export function createClient(serviceHost: string, apiKey: string) {
  const instance = axios.create({
    timeout: 10_000,
    headers: { Authorization: `API-Key ${apiKey}` },
  });
  axiosRetry(instance, { retries: 3 });
  return new AxiosIonosSpaceArtifactApiClient(`https://${serviceHost}`, instance);
}
