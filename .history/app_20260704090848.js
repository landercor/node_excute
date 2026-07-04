import express from 'express';
import { PORT } from './config.js';
const app = express();


app.get('/', (req, res) => {
    res.send('<h2>Hello world ;)</h2>')
})
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
app.get('/usuarios', (req, res) => { //Array de objetos que simula una base de datos de usuarios. En un proyecto real, estos datos se obtendrían de una base de datos.
    
    res.json(usuarios);
})
app.get('/usuarios/:id', (req, res) => { //Array de objetos que simula una base de datos de usuarios. En un proyecto real, estos datos se obtendrían de una base de datos.
    const { id } = parseInt(req.params.id);
    const usuario = usuarios.find(u => u.id === id);
    console.log(usuario);
    // Lógica para obtener el usuario por ID
    console.log(`Obteniendo usuario con ID: ${id}`);
    console.log(typeof id);
})


app.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}`)
})