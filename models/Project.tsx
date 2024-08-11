import { createRealmContext } from "@realm/react";
import Realm, { ObjectSchema } from "realm";
import { Block } from "./Block";

export class Project extends Realm.Object<Project> {
	_id!: Realm.BSON.ObjectId;
	name!: string;
	blocks!: Realm.List<Block>;

	static schema: ObjectSchema = {
		name: "Project",
		primaryKey: "_id",
		properties: {
			_id: "objectId",
			name: "string",
			blocks: "Block[]",
		}
	}
}

const config: Realm.Configuration = {
  schema: [Project],
  schemaVersion: 1,
}

const {RealmProvider} = createRealmContext(config);