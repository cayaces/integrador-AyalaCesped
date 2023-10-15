//importar mongoose
const mongoose = require("mongoose")

//aqui crear la coleccion
const productsCollection = "products"

//aqui el schema
const productsSchema = new mongoose.Schema({
    producto: { type: String, max: 20, required: true },
    precio: { type: Number, max: 10, required: true },
    stock: { type: Number, max: 50, required: true },
    categoria: { type: String, max: 50, required: true}
})

//exportacion de mongoose
//productsSchema.plugin(mongoosePaginate)

const productsModel = mongoose.model(productsCollection, productsSchema)

module.exports = { productsModel }