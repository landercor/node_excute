import express, { req, res } from 'express'
import { PORT } from './config.js'

const app = express()

app.get('/', (req, res) =>{
    res.send('Hello world')
})

app.listen(PORT, () =>{
    console.log(`server running on the PORT ${PORT}`)
})