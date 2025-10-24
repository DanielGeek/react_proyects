// clase para llamarla en mi clase server y hacer la conexión con sockets
class Sockets {

    constructor(io) {

        this.io = io;
        this.socketEvents();

    }

    socketEvents() {
        // socket pasado en el callback equivale al cliente conectado
        this.io.on('connection', (socket) => {

            // Escuchar el evento
            socket.on('mensaje-to-server', (data) => {
                console.log(data);

                // Emitir a todos los clientes
                this.io.emit('mensaje-from-server', data);
            });
        });
    }
}

module.exports = Sockets;