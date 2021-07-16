const { verifyJWT } = require("../helpers/jwt");
const { userConnected, userDisconnected, getUsers } = require("../controllers/sockets");


class Sockets {

    constructor( io ) {

        this.io = io;

        this.socketEvents();
    }

    socketEvents() {
        // On connection
        this.io.on('connection', async( socket ) => {

            const [ valid, uid ] = verifyJWT( socket.handshake.query['x-token'] );

            if( !valid ) {
                console.log('socket not identify ');
                return socket.disconnect();
            }

            const user = await userConnected( uid );


            // TODO: validate JWT
            // is not valid token. disconect

            // TODO: user actived

            // TODO: Emit all users online
            this.io.emit('list-users', await getUsers());

            // TODO: Socket join, uid

            // TODO: Listen when the client send a message

            // TODO: Disconnect

            // TODO: emit all user connected
            socket.on('disconnect', async() => {
                console.log('Client disconected', uid);
                await userDisconnected( uid );
            })

        });
    }


}


module.exports = Sockets;