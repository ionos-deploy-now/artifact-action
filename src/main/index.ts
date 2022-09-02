import Action from '@ionos-deploy-now/actions-core';
import Configuration from './action/input/types';
import { runAction } from './action';

Action.run<Configuration, any>(
  runAction,
  (input) =>
    <Configuration>{
      serviceHost: input.required('service-host'),
      apiKey: input.required('api-key'),
      projectId: input.required('project-id'),
      branchId: input.required('branch-id'),
      version: input.required('version'),
      folder: input.required('folder'),
      action: input.required('action'),
      configFile: input.optional('config-file'),
    }
);
