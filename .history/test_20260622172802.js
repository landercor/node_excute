import express from 'express'
import { PORT } from './config.js'
import { RepositoryUser } from './RepositoryUser.js'
import { error } from 'console'


const app = (express())
app.use(express.json())

//app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send(`
        <h1>Hello world</h1>
        <img src="/img/la flor de otoño.jpg alt="logo">
        <link rel="stylesheep" href="/css/syle.css">
        `);
})

app.post('/login', async (req,res) => {
    const { username, password } = req.body
    try {
        const user = await RepositoryUser({ username, password })
        res.send({user})
    } catch {
        res.status(100).send(error.message)
    }
})
app.post('/register', async (req, res) => {
    const {username, password} = req.body
    console.log({ username, password })

    try {
        const id = await RepositoryUser.create({ username, password})
        res.send({ id })
    } catch (error) {
    res.status(400).send(error.message)
    }
})
app.post('/logout', (req, res) => {     })
app.post('/portecter', (req, res) => {     })

app.listen(PORT, () =>{
    console.log(`server running on port ${PORT}`)
})