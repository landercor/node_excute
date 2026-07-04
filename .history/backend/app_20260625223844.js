import express from 'express'

const app = express()

app.get('/', (res, req) => {
    res.send('<h1>Hello wolrd </h1>')

    const PORT = 3001

    app.listen(PORT, () => {
        console.log(`Server runing on PORT http://localhost:3001`)
    })
})