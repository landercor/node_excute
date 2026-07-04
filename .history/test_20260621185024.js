import express, { req, res } from 'express'
import { PORT } from './config.js'

const app = express()

app.get('/', (req, res) => {
    res.send("hello world")
})

app.listen(PORT, () => {
    console.log(`server running on PORT ${PORT}`)
})