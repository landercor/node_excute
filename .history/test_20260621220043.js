import express from 'express'
import { PORT } from './config.js'
import { RepositoryUser } from './RepositoryUser.js'

const app = (express())
app.use(express.json())

app.get('/', (req, res) =>{
    res.send('<h1>Hello world</h1>')
})

app.post('/login', (req,res) => {   

})
app.post('/register', (req, res) => {  
    const {username, password} = req.body
    console.log(username, password)

    try {
        const id = RepositoryUser.create({ username, password})
        res.status(201).send({ id })
    } catch (error) {
        console.error(error)
    res.status(400).send(error.message)
    }
})
app.post('/logout', (req, res) => {     })
app.post('/portecter', (req, res) => {     })

app.listen(PORT, () =>{
    console.log(`server running on the port ${PORT}`)
})