import express from 'express'
import { PORT } from './config.js'

const app = express()

app.get('/', (req, res) =>{
    res.send('<h1>Hello world</h1>')
})

app.listen(PORT, () =>{
    console.log(`server running on the port ${PORT}`)
})