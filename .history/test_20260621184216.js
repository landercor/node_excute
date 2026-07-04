import express, { req, res } from 'express'
const app = express()
import { PORT } from './config'

app.get('/', (request, response) => {
    res.send("hello world")
        app.listen(PORT, () => {

            console.log(`server running on PORT ${PORT}`)
        }
    )
})