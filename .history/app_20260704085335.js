import express from 'express';
import { PORT } from './config.js';
const app = express();


app.get('/', (req, res) => {
    res.send('<h2>Hello world ;)</h2>')
})

app.get('/Usuarios', (req, res) => {
    const usuarios = [
        {
            id: "",
            name: "lander",
        },

        {
            id: "",
            name: "lander",
        },
        {
            id: "",
            name: "lander",
        }
    ];
    res.json(usuarios);
})


app.listen(PORT, hostname, () => {
    console.log(`Server running on PORT ${PORT}`)
})