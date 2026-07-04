import DBlocal from 'db-local'
import crypto from 'crypto'
import bcrypt from 'bcrypt'
import { SALT_ROUNDS } from './config.js'

const { Schema } = new DBlocal({ path: './db' })
const User = Schema('User', {
    _id: {
        type:
        String,
        required: true
    },
    username: {
        type:
        String,
        required: true
    },
        password: {
        type:
        String,
        required: true
    }
})

export class RepositoryUser {
    static async create ({ username, password }) {
        Vadition.username (username) //username
    
        Vadition.password(password) //password
        
        const user = User.findOne({ username })
        if (user) throw new Error('username alredy exits')

        const id = crypto.randomUUID()
        const hashedPassword = await bcrypt.hashSync(password, SALT_ROUNDS) //manejarlo de manera asigcrona
        User.create({ //
            _id: id,
            username,
            password: hashedPassword
        }).save()
        
        return id
    }
    static login ({ username, password}) {}
}
class Vadition {
    static username (username) {
        if (typeof username !== 'string')
            throw new Error('username must be 3 a String')
        if (username.length < 3)
            throw new Error('username must be ar least 6 character long')
    }

    static password (password) {
        if (typeof password !== 'string')
            throw new Error('password must be a String')

        if (password.length < 6)
            throw new Error('password must be at last 6 character long')
    }
}