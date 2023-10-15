//importar mongoose
const mongoose = require("mongoose")

//aqui crear la coleccion
const cartsCollection = "carts"

//aqui es schema
const cartsSchema = new mongoose.Schema({
    producto: { type: String, max: 20, required: true },
    precio: { type: String, max: 10, required: true }
})

//exportacion de mongoose
//cartsSchema.plugin(mongoosePaginate)

const cartsModel = mongoose.model(cartsCollection, cartsSchema)

module.exports = { cartsModel }
