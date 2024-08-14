import { createRealmContext } from "@realm/react";
import Realm, { ObjectSchema, schemaVersion } from "realm";

export class Block extends Realm.Object<Block> {
  _id!: Realm.BSON.ObjectId;
  name!: string;
  topDepth!: string;
  bottomDepth!: string;
  disturbedSampleNumber?: string;
  penetrationTestNumber?: string;
  a1?: string;
  a2?: string;
  b1?: string;
  b2?: string;
  c1?: string;
  c2?: string;
  d1?: string;
  d2?: string;
  e1?: string;
  e2?: string;
  f1?: string;
  f2?: string;
  primaryColor?: string;
  secondaryColor?: string;
  soilProperty1?: string;
  soilProperty2?: string;
  soilProperty3?: string;
  soilProperty4?: string;
  sampleRecover?: string;
  
  static schema: ObjectSchema = {
    name: "Block",
    embedded: true,
    properties: {
      _id: "objectId",
      name: "string",
      topDepth: "string",
      bottomDepth: "string",
      disturbedSampleNumber: "string?",
      penetrationTestNumber: "string?",
      a1: "string?",
      a2: "string?",
      b1: "string?",
      b2: "string?",
      c1: "string?",
      c2: "string?",
      d1: "string?",
      d2: "string?",
      e1: "string?",
      e2: "string?",
      f1: "string?",
      f2: "string?",
      primaryColor: "string?",
      secondaryColor: "string?",
      soilProperty1: "string?",
      soilProperty2: "string?",
      soilProperty3: "string?",
      soilProperty4: "string?",
      sampleRecover: "string?",
    }
  };
}

const config: Realm.Configuration = {
  schema: [Block],
  schemaVersion: 1,
}

const {RealmProvider} = createRealmContext(config);