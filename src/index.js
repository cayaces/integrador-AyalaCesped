const express = require("express")
const { default: mongoose } = require("mongoose")
const productsRouter = require("./routes/products.router")
const cartsRouter = require("./routes/carts.router")
//const handlebars = require("express-handlebars")
//const viewsRouter = require("./routes/views.router.js")
const path = require("path")
//import mongoose from "mongoose";
const app = express();
const PORT = 8080;

//conectarse al puerto
app.listen(PORT, () => {
    console.log(`Servidor escuchando en puerto ${PORT}`);
});

//enviar y recibir info, no olvidar
app.use(express.json())


//conectando mongoose
mongoose.connect("mongodb+srv://coderClau:7725AmorCODER@coderclau.lgoc83w.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp")
    .then(() => {
        console.log("Conectado a la base de datos")
    })
    .catch(error => {
        console.log("Error al intentar conectarse a la DB", error)
    })


//Rutas
app.use("/api/products", productsRouter);
app.use("/api/carts", cartsRouter);

//importante
//app.engine("handlebars", handlebars.engine());
app.set('views', __dirname + '/views')
//app.set('view engine', 'handlebars')
app.use(express.static(__dirname + "/public"));
//app.use("/", viewsRouter)
app.use(express.urlencoded({ extended: true }))
