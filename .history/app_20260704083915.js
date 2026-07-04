import express from 'express';
import { PORT } from './config.js';
const hostname = '127.0.0.1';
const app = express();


app.get('/', (req, res) => {
    res.send('<h2>Hello world ;0</h2>')
})

app.listen(PORT, hostname, () => {
    console.log(`Server running on PORT ${PORT}`)
})