import express from 'express'
import { PORT, SECRET_JWT_KEY } from './config.js'
import jwt from 'jsonwebtoken'
import cookieParser from 'cookie-parser'
import { RepositoryUser } from './RepositoryUser.js'
import { error } from 'console'

const app = (express())

app.set('view engine', 'ejs')
app.use(express.json())
app.use(express.cookieParser())



//app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {//para renderizar nuestros archivos
    res.render(`example`, { username: 'landercorf' }) //pasamos las propiedades para renderizar
})

app.post('/login', async (req,res) => {
    const { username, password } = req.body

    try {
        const user = await RepositoryUser.login({ username, password }) //recueda las redirreciones van a las varibles statiscas
        const token = jwt.sing({ id: user.id, username: user.username})
        res.send({user})
    } catch (error){
        res.status(401).send(error.message)
    }
})
app.post('/register', async (req, res) => {
    const {username, password} = req.body
    console.log({ username, password })

    try {
        const id = await RepositoryUser.create({ username, password},
            SECRET_JWT_KEY,
        {
            expiresIn: '1h', //expeiracion
        })
        
        res.send({ user, token   })
    } catch (error) {
    res.status(400).send(error.message)
    }
})
app.post('/logout', (req, res) => {     })
app.post('/protecter', (req, res) => {     })

app.listen(PORT, () =>{
    console.log(`server running on port ${PORT}`)
})