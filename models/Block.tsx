import { createRealmContext } from "@realm/react";
import Realm, { ObjectSchema, schemaVersion } from "realm";

export class Block extends Realm.Object<Block> {
  _id!: Realm.BSON.ObjectId;
  name!: string;

  static schema: ObjectSchema = {
    name: "Block",
    primaryKey: "_id",
    properties: {
      _id: "objectId",
      name: "string",
    }
  };
}

const config: Realm.Configuration = {
  schema: [Block],
  schemaVersion: 1,
}

const {RealmProvider} = createRealmContext(config);