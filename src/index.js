import express from "express";
import { engine } from "express-handlebars";
import handlebars from 'express-handlebars'
import viewsRouter from './routes/views.router.js'
import { __dirname } from './utils.js'
import * as path from "path"
import { Server } from "socket.io"

const app = express();
const PORT = 8080;

const server = app.listen(PORT, () => {
    console.log(`Servidor escuchando en puerto ${PORT}`);

});

const io = new Server(server);

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
//encendiendo socket
io.on('connection', socket => {
    console.log("Nuevo cliente conectado")

    socket.on('message', data => {
        console.log(data);
    })

    socket.emit("Cliente conectado");
    socket.broadcast.emit("En linea");
    server.emit("server conectado")

    socket.on("disconnect", () => {
        console.log("Cliente desconectado")
    })

})

export { app, io };
