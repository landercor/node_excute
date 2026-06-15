import express, { request, response } from 'express'
import { PORT } from './config.js'
import { UserRepository } from './userRepository.js'

const app = express()


app.get('/', (req, res) => {
    res.send('<h1>algo que pueda probar</h1>')  /*Raiz del proyecto*/
})

app.post('/login', (req, res) =>{
    
})
app.post('/register', (req, res) => {
    const { username, password } = req.body // <= ojo que es el cuerpo dela paticion
    console.log(req.body)

    try {
        const id = UserRepository.create({username, password})
        res.send({ id })
    } catch (error) {
        res.status(400). send(error.message)
    }
})

app.post ('logout', (req, res) => {

})  

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})