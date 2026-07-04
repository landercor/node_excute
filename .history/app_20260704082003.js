import express from 'express';
const app = express();
const PORT = process.env.PORT || 2230;

app.get('/', (req, res) => {
    res.send('<h2>Hello world</h2>')
})

app.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}`)
})