var socket = io();

socket.on('connect', function() {

    console.log("conectado");


});

socket.on('disconnect', function() {

    console.log("usuario desconectado");

});
// los emit son para enviar informacion
// escuchar peticiones 
socket.emit('enviarMensaje', {
    usuario: "Jorge",
    mensaje: "Hola carepicha"
}, function(respuesta) {

    console.log("se disparo el evento", respuesta);

});



// escuchar informacion
socket.on('enviarMensaje', function(mensaje) {
    console.log(mensaje);


});