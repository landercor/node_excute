import express from 'express'
import { PORT } from './config.js'

const app = express()

app.get('/', (req, res) =>{
    res.send(<i class="fas fa-h1  are-large are-medium ">'Hello world'</i>)
})

app.listen(PORT, () =>{
    console.log(`server running on the port ${PORT}`)
})