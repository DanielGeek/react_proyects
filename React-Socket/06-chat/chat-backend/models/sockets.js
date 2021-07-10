

class Sockets {

    constructor( io ) {

        this.io = io;

        this.socketEvents();
    }

    socketEvents() {
        // On connection
        this.io.on('connection', ( socket ) => {

            console.log('client connect');

            // TODO: validate JWT
            // is not valid token. disconect

            // TODO: user actived

            // TODO: Emit all users online

            // TODO: Socket join, uid

            // TODO: Listen when the client send a message

            // TODO: Disconnect

            // TODO: emit all user connected
            socket.on('disconnect', () => {
                console.log('Client disconected');
            })

        });
    }


}


module.exports = Sockets;