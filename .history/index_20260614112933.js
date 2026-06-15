import express, { request, response } from 'express'
import { PORT } from './config.js'

const app = express()


app.get('/', (request, response) => {
    response.send('algo que pueda probar')
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})