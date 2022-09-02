export default interface Configuration {
  readonly serviceHost: string;
  readonly apiKey: string;
  readonly projectId: string;
  readonly branchId: string;
  readonly version: string;
  readonly folder: string;
  readonly action: string;
  readonly configFile?: string;
}
