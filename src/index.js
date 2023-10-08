import express from "express";
import { engine } from "express-handlebars";
import handlebars from 'express-handlebars'
import viewsRouter from './routes/views.router.js'
import { __dirname } from './utils.js'
import * as path from "path"
import { Server } from "socket.io"
//import mongoose from "mongoose";

const { default: mongoose } = require("mongoose")

const productsRouter = require('./routes/products.router');
const cartsRouter = require('./routes/carts.router');
const userRouter = require("./routes/users.router.js")


const app = express();
const PORT = 8080;

const server = app.listen(PORT, () => {
    console.log(`Servidor escuchando en puerto ${PORT}`);

});

app.use(express.json())
app.use(express.urlencoded({ extended: true }))



mongoose.connect("mongodb+srv://coderClau:7725AmorCODER@coderclau.lgoc83w.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp")
.then(() => {
    console.log("Conectado a la base de datos")
})
.catch(error =>{
    console.log("Error al intentar conectarse a la DB", error)
})



app.use("/api/users", userRouter)
app.use('/', productsRouter);
app.use('/', cartsRouter);


const io = new Server(server);



/*const deliProductos = [
    {
        nombre: "snapy",
        precio: 25000,
        stock: 50,
        categoria: "juguetes",
        imagen: "imagen/imagen",
        id: 1
    },
    {
        nombre: "huevo",
        precio: 1000,
        stock: 30,
        categoria: "juguetes",
        imagen: "imagen/imagen",
        id: 4
    },
    {
        nombre: "lubricante",
        precio: 10000,
        stock: 10,
        categoria: "cosmeticos",
        imagen: "imagen/imagen",
        id: 2
    },
    {
        nombre: "aceite de masaje",
        precio: 5000,
        stock: 40,
        categoria: "cosmeticos",
        imagen: "imagen/imagen",
        id: 5
    },
    {
        nombre: "baby doll",
        precio: 25000,
        stock: 20,
        categoria: "lenceria",
        imagen: "imagen/imagen",
        id: 3
    },
    {
        nombre: "transparente negro",
        precio: 35000,
        stock: 50,
        categoria: "lenceria",
        imagen: "imagen/imagen",
        id: 6
    }
]

//productos
app.get("/deliProductos", (req, res) => {
    const limit = req.query.limit || deliProductos.length;
    res.json(deliProductos.slice(0, limit));
})

//id
app.get("/deliProductos/:id", (req, res) => {
    let idProducto = parseInt(req.params.id);
    let producto = deliProductos.find(u => u.id === idProducto)

    if (!producto) return res.send({ error: 'Producto no encontrado.' })
    res.send({ producto })
})


//categoria
app.get("/categoria", (req, res) => {
    const categoria = req.query.categoria;

    if (!categoria) {
        return res.send({ error: "Debes buscar una categoria." })
    }
    const categoriaFiltrada = deliProductos.filter(producto => producto.categoria === categoria)
    if (categoriaFiltrada.length === 0) {
        return res.send({ error: "No se encontro en esta categoria." })

    }
    res.send({ deliProductos: categoriaFiltrada })
})*/






app.engine("handlebars", handlebars.engine());
app.set('views',__dirname + '/views')
app.set('view engine', 'handlebars')

app.use(express.static(__dirname + "/public"));
app.use("/", viewsRouter)

app.get("/", (req, res) => {
    res.render("index");
})

app.get("/realTimeProducts", (req, res) => {
    res.render("realTimeProducts");
})


export { app, io };
