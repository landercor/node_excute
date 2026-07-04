import DBlocal from 'db-local'
import Schema from 'db-local/lib/modules/schema.js'
import crypto from 'node:crypto'

app.use(express.json)
const app = (express())

app.get('/', (req, res) =>{
    res.send('<h1>Hello world</h1>')
})

app.post('/login', (req,res) => {   

})
app.post('/register', (req, res) => {  
    const {username, password} = req.body

    try {
        const id = RepositoryUser.create({ username, password})
        res.send({id})
    }catch (error) {
    res.status(400).send(error.message)
    }
})
app.post('/logout', (req, res) => {     })
app.post('/portecter', (req, res) => {     })

app.listen(PORT, () =>{
    console.log(`server running on the port ${PORT}`)
})