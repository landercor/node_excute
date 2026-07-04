import express from 'express';
import { PORT } from './config.js';
const app = express();


app.get('/', (req, res) => {
    res.send('<h2>Hello world ;)</h2>')
})

app.get('/Usuarios', (req, res) => { //Array de objetos que simula una base de datos de usuarios. En un proyecto real, estos datos se obtendrían de una base de datos.
    const usuarios = [
        {
            id: "",
            name: "lander",
        },

        {
            id: "2",
            name: "lander",
        },
        {
            id: "",
            name: "lander",
        }
    ];
    res.json(usuarios);
})
app.get('/Usuarios/:id', (req, res) => { //Array de objetos que simula una base de datos de usuarios. En un proyecto real, estos datos se obtendrían de una base de datos.
    const { id } = req.params;
    // Lógica para obtener el usuario por ID
})


app.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}`)
})