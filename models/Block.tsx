import Realm from "realm";

export class Block extends Realm.Object<Block> {
    name!: "string";

    static schema = {
        name: "Block",
        properties: {
          name: "string",
        },
    };
}