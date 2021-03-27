const Server = require('./models/server');

const server = new Server();

server.execute();

// io.on('connection', (socket) => {

//   // socket.emit('mensaje-bienvenida', {
//   //   msg: 'Bienvenido al server',
//   //   fecha: new Date()
//   // });

//   // Escuchar el evento del cliente
//   socket.on('mensaje-to-server', (data) => {
//     console.log(data);

//     // io para emitir a todos los clientes
//     io.emit('mensaje-from-server', data);
//   });
// });




