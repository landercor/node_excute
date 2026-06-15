import express, { request, response } from 'express'

const app = express()

const PORT =process.env.PORT ?? 3000

app.get('/', (request, response) => {
    response.send('algo que pueda probar')
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})