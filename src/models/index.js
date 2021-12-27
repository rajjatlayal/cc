// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Settings, Admin } = initSchema(schema);

export {
  Settings,
  Admin
};