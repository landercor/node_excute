import express, { request, response } from 'express'
import { PORT } from './config.js'
const app = express()

app.get('/', (request, response) => {
    response.send("hello world")
        app.listen(PORT, () => {

            console.log(`server running on PORT ${PORT}`)
        }
    )
})