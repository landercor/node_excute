
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
            username: "unny",
            password: "1234"
        },
        {
            id: 2,
            username: "catmoon",
            password: "5678"
        },
        {
            id: 3,
            username: "Dogday",
            password: "9012"
        },
        {
            id: 4,
            username: "Catnap",
            password: "3456"
        }
    ];

app.get('/usuarios', (req, res) => { //Array de objetos que simula una base de datos de usuarios. En un proyecto real, estos datos se obtendrían de una base de datos.
    
    res.json(usuarios);
})
app.get('/usuarios/:id', (req, res) => { //Array de objetos que simula una base de datos de usuarios. En un proyecto real, estos datos se obtendrían de una base de datos.
    const id = parseInt(req.params.id);
    const usuario = usuarios.find(u => u.id === id);

    if (!usuario) {
        return res.status(404).json({ error: 'Usuario no encontrado' });
    }

    res.json(usuario);

    /*console.log(`Obteniendo usuario con ID: ${id}`);  // Lógica para obtener el usuario por ID*/
});

app.post('/usuarios', (req, res) => { // recueda utilizar las validaciones necesarias para evitar errores y garantizar la integridad de los datos

    // validar que los datos del nuevo usuario sean válidos (por ejemplo, que tenga un nombre de usuario y una contraseña)
    if (!req.body.username || !req.body.password) {
        return res.status(400).json({ error: 'Nombre de usuario y contraseña son requeridos' });
    }
    if (usuarios.find(u => u.username === req.body.username)) {
        return res.status(401).json({error: 'this users alredy exist'});
    }
    


    const nuevoUsuario = { // Obtener los datos del nuevo usuario desde el cuerpo de la solicitud
        ...req.body, // Spread operator para copiar las propiedades del objeto req.body
        id: usuarios.length + 1, // Generar un nuevo ID para el usuario (puedes usar un método más robusto en un proyecto real)
        username: req.body.username,
        password: req.body.password
    };

    usuarios.push(nuevoUsuario); // Agregar el nuevo usuario al array de usuarios
    res.status(201).json(nuevoUsuario); // Devolver el nuevo usuario creado con un código de estado 201 (Creado)
});

app.put('/usuarios/:id', (req, res) => { // Lógica para actualizar un usuario por ID
    const id = parseInt(req.params.id); // para obtener el id de la ruta usuarios/:id
    const usuarioIndex = usuarios.findIndex(u => u.id === id); // Buscar el índice del usuario en el array

    if (usuarioIndex === -1) {
        return res.status(404).json({ error: 'Usuario no encontrado' });
    }
    if (!req.body || Object.keys(req.body).length === 0) {
        return res.status(400).json({ message: 'No se enviaron datos para actualizar del usuario' });
    }

    const usuarioActualizado = {
        ...usuarios[usuarioIndex],
        ...req.body,
        id
    };

    usuarios[usuarioIndex] = usuarioActualizado;
    res.json(usuarioActualizado);
    console.log(`Actualizando usuario con ID: ${id}`);
    console.log(`Usuario actualizado correctamente: ${JSON.stringify(usuarioActualizado)}`);
});

app.delete('/usuarios/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const usuarioIndex = usuarios.findIndex(u => u.id === id);

    if (usuarioIndex === -1) {
        return res.status(404).json({ error: 'Usuario no encontrado' });
    }

    usuarios.splice(usuarioIndex, 1);
    res.status(200).json({ message: 'Usuario eliminado correctamente' });
    console.log(`Eliminando usuario con ID: ${id}`);
});

app.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}`)
});