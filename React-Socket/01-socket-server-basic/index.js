const Server = require('./models/server');


const server = new Server();

server.execute();

// socket pasado en el callback equivale al cliente conectado
// io.on('connection', (socket) => {
//     // emitir data al cliente
//     // socket.emit('mensaje-bienvenida', {
//     //     msg: 'Bienvenido al server',
//     //     fecha: new Date()
//     // });

//     // Escuchar el evento
//     socket.on('mensaje-to-server', (data) => {
//         console.log(data);

//         // Emitir a todos los clientes
//         io.emit('mensaje-from-server', data);
//     });
// });