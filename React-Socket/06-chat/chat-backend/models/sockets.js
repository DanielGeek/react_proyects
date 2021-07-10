const { verifyJWT } = require("../helpers/jwt");


class Sockets {

    constructor( io ) {

        this.io = io;

        this.socketEvents();
    }

    socketEvents() {
        // On connection
        this.io.on('connection', ( socket ) => {

            const [ valid, uid ] = verifyJWT( socket.handshake.query['x-token'] );

            if( !valid ) {
                console.log('socket not identify ');
                return socket.disconnect();
            }

            console.log('client connect', uid);

            // TODO: validate JWT
            // is not valid token. disconect

            // TODO: user actived

            // TODO: Emit all users online

            // TODO: Socket join, uid

            // TODO: Listen when the client send a message

            // TODO: Disconnect

            // TODO: emit all user connected
            socket.on('disconnect', () => {
                console.log('Client disconected', uid);
            })

        });
    }


}


module.exports = Sockets;