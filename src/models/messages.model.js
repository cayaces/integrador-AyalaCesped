//importar mongoose
const mongoose = require("mongoose")

//aqui crear la coleccion
const messagesCollection = "messages"

//aqui es schema
const messagesSchema = new mongoose.Schema({
    email: { type: String, max: 20, required: true },
    mensaje: { type: String, max: 10, required: true }
})

//exportacion de mongoose
//messagesSchema.plugin(mongoosePaginate)

const messagesModel = mongoose.model(messagesCollection, messagesSchema)

module.exports = { messagesModel }