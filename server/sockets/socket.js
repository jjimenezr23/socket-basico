const { io } = require('../server');


io.on('connection', (client) => {

    console.log('Usuario conectado');

    client.emit('enviarMensaje', {

        usuario: "administrador",
        mensaje: "bienvenido a esta aplicacion"

    });




    client.on('disconnect', () => {

        console.log("cliente desconectado");
    });

    // escuchar el cliente
    client.on('enviarMensaje', (data, callback) => {

        console.log(data);

        client.broadcast.emit('enviarMensaje', data);
        /*  if (mensaje.usuario) {


              callback({
                  respuesta: "todo salio mal"
              });
          } else {
              callback({ respuesta: "todo salio mal" })
          }*/
    });

});