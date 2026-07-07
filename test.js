import express from 'express';
import routes from './routes/notesRoutes.js'
import dotenv from 'dotenv'
import mongoose from 'mongoose'

dotenv.config() // se utiliza para cargar las variables de entorno del .env

const app = express()

app.use(express.json())
app.use('/notes', routes)

const PORT = process.env.PORT || 3000

mongoose.connect(process.env.MONGO_DB_URI)
.then(() => {
    console.log('DataBase conneted')
    app.listen(PORT, () => {
        console.log(`Server runningf on PORT: ${PORT}`)
    })
})
.catch(error => console.error(err))
