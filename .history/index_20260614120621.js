import express, { request, response } from 'express'
import { PORT } from './config.js'

const app = express()


app.get('/', (req, res) => {
    res.send('algo que pueda probar')  /*Raiz del proyecto*/
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})