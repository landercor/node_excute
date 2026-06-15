import  DBlocal from 'db-local'
import crypto from 'node:crypto'
import bcrypt from 'bcrypt'
import { SAlT_ROUNDS } from './config.js'
import { TIMEOUT } from 'node:dns'
import { type } from 'node:os'

const { Schema } = new DBlocal({ path: './db'})

export const document_types = Object.freeze({
    CC: {_id: "CC", code: "13", label: "cedula de ciudadania"},
    TI: {_id: "TI", code: "12", label: "tarjeta de identidad"},
    CE: {_id: "CE", code: "22", label: "cedula de extranjeria"},
    NIT: {_id: "NIT", code: "31", label: "Número de Identificación Tributaria"},
    PP: {_id: "PP", code: "41", label: "Pasaporte"},
});

export const UserCollection = dbSchema('User', {
    _id: String,
    username: String,
    documentType: String,
    documentNumbre: String,
    createdAt: String
})
const User = Schema('User', {
    _id: { 
        type: 
        String, 
        required: 
        true
    },
    documentType: {
        type:
        String,
        required: true
    },
    documentNumber: {
        type:
        String,
        required:true
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
            password: hashedPassword,
            documentType: String
        }).save()

        return id
    }

}