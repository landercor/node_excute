import express from 'express';
import { PORT } from './config.js';
const app = express();

//Middleware
app.use(express.json()) //metodo para interceptar las peticiones para hacer un tipo de modificacion o validacion

app.get('/', (req, res) => {
    res.send('<h2>Hello world ;)</h2>')
})
const usuarios = [
        {
            id: 1,
            name: "lander",
        },
        {
            id: 2,
            name: "lander",
        },
        {
            id: 3,
            name: "lander",
        }
    ];
app.get('/usuarios', (req, res) => { //Array de objetos que simula una base de datos de usuarios. En un proyecto real, estos datos se obtendrían de una base de datos.
    
    res.json(usuarios);
})
app.get('/usuarios/:id', (req, res) => { //Array de objetos que simula una base de datos de usuarios. En un proyecto real, estos datos se obtendrían de una base de datos.
    const { id } = parseInt(req.params.id);
    const usuario = usuarios.find(u => u.id === id);

    /*console.log(`Obteniendo usuario con ID: ${id}`);  Lógica para obtener el usuario por ID*/
})

app.post('/usuarios', (req, res) => {
    const nuevoUsuario = { // Obtener los datos del nuevo usuario desde el cuerpo de la solicitud
        ...req.body, // Spread operator para copiar las propiedades del objeto req.body
        id: usuarios.length + 1 // Generar un nuevo ID para el usuario (puedes usar un método más robusto en un proyecto real)
    };

    console.log(nuevoUsuario);

    usuarios.push(nuevoUsuario); // Agregar el nuevo usuario al array de usuarios
    res.status(201).json(nuevoUsuario); // Devolver el nuevo usuario creado con un código de estado 201 (Creado)
    console.log(req.body);
})


app.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}`)
})