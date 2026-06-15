import express, { request, response } from 'express'
import { PORT } from './config.js'
import { UserRepository } from './userRepository.js'

const app = express()

/*middleware */
app.use(express.json()) //metodo para interceptar las peticiones parahacer un tipo de modificacion o validacion 
/*this funtion coonvert the text to Json to transform it into the req.body 
type so that it's beging read for the body*/

app.get('/', (req, res) => {
    res.send('<h1>algo que pueda probar</h1>')  /*Raiz del proyecto*/
})

app.post('/login', (req, res) =>{
    
})
app.post('/register', (req, res) => {
    const { username, password } = req.body // <= ojo que es el cuerpo de la paticion (express no tramitaa el cuerpo del formulario.)e
    console.log({req, res})

    try { // los metodos y propiedades estaticas podemo utilizarlas sin necesidad de crear una instancia dela clase.
        const id = UserRepository.create({ username, password })
        res.send({ id }) //devolverla
    } catch (error) {
        res.status(400). send(error.message) // normalmente no se debe enviar el error del repositorio.
    }
}) //tenemos que manejar los errores de manera correcta.

app.post ('/logout', (req, res) => {

})  

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})