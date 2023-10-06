const userName = document.querySelector('.userName')
const socket = io()
socket.emit('message', '¡Hola, me estoy comunicando desde un websocket!')

socket.on("Bienvenido", data=> {
    console.log(data);
})

socket.on("Hola", data =>{
    console.log(data);
})

socket.on("Bienvenido", data =>{
    console.log(data);
})