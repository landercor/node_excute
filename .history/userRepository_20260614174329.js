import  DBlocal from 'db-local'
import crypto from 'node:crypto'
import bcrypt from 'bcrypt'
import { SAlT_ROUNDS } from './config.js'

const { Schema } = new DBlocal({ path: './db'})

const User = Schema('User', {
    _id: { 
        type: 
        String, 
        required: 
        true
    },
    username: { 
        type: 
        String, 
        required: 
        true
    },
    password: { 
        type: 
        String, 
        required: 
        true
    }
})

export class UserRepository { //metodos

    static create ({ username, password}) {

        // 1. validacion del username: (opcional: usar zod)
        if ( typeof username !== 'string') 
            throw new Error('username must be a string')

        if (username.length < 3) 
            throw new Error('usernmae must be at least 3 characters long')

        if(typeof password !== 'string') 
            throw new Error('password must be a string')

        if(password.length < 6 ) 
            throw new Error('password must be at last 6 characters long')
            
        //2. asegurarse que el usernmae no exista
        const user = User.findOne({ username })
        if ( user )throw new Error('username already exists')

        const id = crypto.randomUUID() // const hashedPasseord = bcrypt.hashSync(password, 10) lo mismo pero indexado en el documento directamente.
        const hashedPassword = bcrypt.hashSync(password, SAlT_ROUNDS) // ahora  importado desde otro archivo.
        User.create({
            _id: id,
            username,
            password: hashedPassword
        }).save()

        return id
    }

}