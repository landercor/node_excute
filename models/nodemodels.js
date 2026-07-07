import mongoose from "mongoose"
const nodeSchema = new mongoose.Schema({

    tittle: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    }
})
const Node = new mongoose.model('Node', nodeSchema)

export default Node