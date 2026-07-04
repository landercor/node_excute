import express from 'express'

const app = express()

app.get('/', (res, req) => {
    res.send('Hello wolrd')

    const PORT = 3001

    app.listen(PORT, () => {
        console.log(`Server runing on PORT http://localhost:3001`)
    })
})