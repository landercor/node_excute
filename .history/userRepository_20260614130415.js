import Schema from 'db-local/lib/modules/schema'
import  DBlocal from 'db-localm'
const { Schema } = new DBlocal({ path: './db'})

const User = Schema('User', {
    _id: { type: String, require: true},
        username: { type: String, required: true},
        password: { type: String, required: true}
})
export class UserRepository {
    static create ({ username, password}) {}
    static create ({username, password}) {}
}