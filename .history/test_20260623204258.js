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
        res
            cookie('access_token', token, {
                httpOnly: true, //la cookie solo se puede acceder desde el servidor
                secure: process.env.NODE_ENV === 'production', //la cookie solo se puede acceder en https
                sameSite: 'strict', //la cookie solo se puede acceder desde el mismo dominio
                maxAge: 1000 * 60 * 60 // lacookie solo tiene tiempo de validez de 1h
            })
        .send({ user, token   })
    } catch (error) {
    res.status(400).send(error.message)
    }
})
app.post('/logout', (req, res) => {     })
app.post('/protecter', (req, res) => {
    const token = req.cookies.access_token
    if (!token) {
        return res.status(403).send('access not authorized')
    }

    try {
        const data = jwt.verify(token, SECRET_JWT_KEY) // del token va aextraer la data del id, username
    }catch (error) {
        res.status(401).send('access not authorized')
    }
    res.render('protecter', { username: 'landercortf'})
})

app.listen(PORT, () =>{
    console.log(`server running on port ${PORT}`)
})