import { ModelInit, MutableModel } from "@aws-amplify/datastore";

type AdminMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Admin {
  readonly id: string;
  readonly username?: string | null;
  readonly password?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Admin, AdminMetaData>);
  static copyOf(source: Admin, mutator: (draft: MutableModel<Admin, AdminMetaData>) => MutableModel<Admin, AdminMetaData> | void): Admin;
}