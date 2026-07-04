import express from 'express';

const app = express();


app.get('/', (req, res) => {
    res.send('<h2>Hello world</h2>')
})

app.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}`)
})