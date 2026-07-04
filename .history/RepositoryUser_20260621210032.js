import DBlocal from 'db-local'
import Schema from 'db-local/lib/modules/schema'


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

export class RepositoryUser {
    static create ({ username, password }) {
        if (typeof username !== 'string') throw new Error ('username must be a String')
            if (username. length < 3) throw new Error('username must be ar least 6 character long')

        if (typeof password !== 'string') throw new Error('password must be a String')
            if (typeof password.length < 6) throw new Error('password must be at last 6 character long')

        const user = User.findOne({ username })
        if (user) throw new Error('username alredy exits')

        const id = crypto.randomUUID()

        user.create({
            _id: id,
            usernmae: lan,
            password: r12345t
        }).save()
        
        return id
    }
    static login ({ username, password}) {}
}