import  DBlocal from 'db-local'
import crypto from 'node:crypto'
import bcrypt from 'bcrypt'
import { SAlT_ROUNDS } from './config.js'
import { type } from 'node:os'
import { create } from 'node:domain'
import { decrypt } from 'dotenv'

const { Schema } = new DBlocal({ path: './db'})

export const documentTypes = Object.freeze({
    CC: {_id: "CC",
        code: "13",
        label: "cedula de ciudadania"
    },
    TI: {_id: "TI",
        code: "12",
        label: "tarjeta de identidad"
    },
    CE: {_id:
        "CE", code:
        "22", label:
        "cedula de extranjeria"
    },
    NIT: {_id: "NIT",
        code: "31", label:
        "Número de Identificación Tributaria"
    },
    PP: {_id: "PP",
        code: "41",
        label: "Pasaporte"
    },
})

/*
export const UserCollection = Schema('User', {
    _id: String,
    name: String,
    documentType: String,   // Guardará "CC", "CE", etc.
    document: String, // Siempre String para evitar problemas con ceros a la izquierda
    createdAt: String
});
*/

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
    document: {
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
    },
    createAt: {
        type: 
        String,
        required: false
    }
})

export class UserRepository { //metodos

    static create ({ 
        username, 
        password, 
        documentType, 
        document
    }) 
    {
        // 1. validacion del username: (opcional: usar zod)
        if ( typeof username !== 'string') 
            throw new Error('username must be a string')

        if (username.length < 3) 
            throw new Error('usernmae must be at least 3 characters long')

        if(typeof password !== 'string') 
            throw new Error('password must be a string')

        if(password.length < 6 ) 
            throw new Error('password must be at last 6 characters long')
        
        if(!Object.keys(documentTypes)
            .includes(documentType)
        ){
            throw new Error('invalid document type')
        }

        if(typeof document !== 'string')
            throw new Error('documento must be a string')

        if(document.length < 6)
            throw new Error('document mus be a at last 8 at 12 character long')
            
        //2. asegurarse que el usernmae no exista
        const user = User.findOne({ username })
        if ( user )throw new Error('username already exists')

        const existinDocument = User.findOne({
            document
        })
        if (existinDocument){
            throw new Error('document already exists')
        }
        const id = crypto.randomUUID() // const hashedPasseord = bcrypt.hashSync(password, 10) lo mismo pero indexado en el documento directamente.
        const hashedPassword = bcrypt.hashSync(password, SAlT_ROUNDS) // ahora  importado desde otro archivo.

        const encrypted = encrypt(document)
        const original = decrypt(encrypted)

        const createdAt = //insertion of the date
        new Date().toISOString

        updateAt:
        new Date().toDateString()

        User.create({
            _id: id,
            username,
            password: hashedPassword,
            document,
            documentType,
            createdAt
        }).save()

        return id
    }
}