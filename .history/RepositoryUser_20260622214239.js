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
        Validation.username (username) //username
    
        Validation.password(password) //password

        const user = User.findOne({ username })
        if (!user) throw new Error("username does not exist")

        const isValid = bcrypt.compareSync(password, user.password)
        if (!isValid) throw new Error("password is invalid")

        const id = crypto.randomUUID()
        const hashedPassword = await bcrypt.hashSync(password, SALT_ROUNDS) //manejarlo de manera asigcrona
        User.create({ //
            _id: id,
            username,
            password: hashedPassword
        }).save()
        
        return id
    }
    static async login ({ username, password}) {
        Validation.username (username) //username
    
        Validation.password(password) //password

        const user = User.findOne({ username })
        if (!user) throw new Error("username does not exist")

        const isValid = await bcrypt.compareSync(password, user.password)
        if (!isValid) throw new Error("password is invalid") //comentalo
            const {password: _, ...publicUser } = user

        return {
            username: user.username,
            
        }
    }
}
//reutilizar
class Validation { // estasvalidaciones se pueden poner en un archivo por separado y enlazarlos donde se necesite.
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