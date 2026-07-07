import express from 'express'
import Node from '../models/nodemodels.js'

const router = express.Router()


router.get('/', async (req, res) => {
    try {
        console.log('get all Notes')
        const notes = await Node.find()
        console.log(notes)
        res.status(200).json(notes)
    } catch (error) {
        console.error(error)
    }
})

router.get('/:id', async (req, res) => {
    console.log('Obtaining notes data...')
    try {
        const { id } = req.params
        const node = await Node.findById(id)
        console.log(nodes)
        if (!node) return res.status(404).json({ error: 'Nota no encontrada' })
        res.status(200).json({ message: 'Nota obtenida correctamente', data: node })
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Server error' })
    }
})

router.post('/',  async (req, res) => {
    try {
        console.log('Creating a new note...')
        const {tittle, content} = req.body
        const newNode = new Node({ tittle, content })
        const savedNode = await newNode.save() // con este metodo guardamos el objeto en la base de datos
        res.status(201).json({ message: 'Node created correctly', Node: savedNode})
        console.log(newNode)
        
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Server error'})
    }
})

router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params
        const { tittle, content } = req.body
        const updatedNote = await Node.findByIdAndUpdate(id, { tittle, content }, { new: true })
        if (!updatedNote) return res.status(404).json({ error: 'Nota no encontrada' })
        res.status(200).json(updatedNote)
        console.log(updatedNote)
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Server error' })
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params
        const deletedNote = await Node.findByIdAndDelete(id)
        if (!deletedNote) return res.status(404).json({ error: 'Nota no encontrada' })
        res.status(200).json({ message: 'Nota eliminada', Node: deleted })
        console.log(deletedNote)
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Server error' })
    }
})
export default router
