// Servidor de Express
const app = require('express')();

// Servidor de sockets
const server = require('http').createServer(app);

// Configuración del socket server
const io = require('socket.io')(server);

io.on('connection', () => { 
  console.log('Cliente conectado');
});


server.listen(8080, () => {
  console.log('Server corriendo en puerto :8081')
});