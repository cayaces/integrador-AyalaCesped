const mongoose = require("mongoose")
const userCollectionProducts = "usuarios"

const userSchema = new mongoose.Schema({
    nombre: { type: String, max: 20, required: true },
    precio: { type: Numbers, max: 10, required: true },
    stock: { type: Numbers, max: 50, required: true },
    categoria: { type: String, max: 50, required: true},
    codigo: { type: Numbers, max: 50, required: true }
})

const userModel = mongoose.model(userCollectionProducts, userSchema)

module.exports = { userModel }

