import dbLocal from "db-local";
import Schema from "db-local/lib/modules/schema";

const User = Schema("user", {
    _id: { type:  String, require: true },
    username: { type: String, require: true},
    password: { type: String, require: true}
})