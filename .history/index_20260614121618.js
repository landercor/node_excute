import express, { request, response } from 'express'
import { PORT } from './config.js'

const app = express()


app.get('/', (req, res) => {
    res.send('<h1>algo que pueda probar</h1>')  /*Raiz del proyecto*/
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})