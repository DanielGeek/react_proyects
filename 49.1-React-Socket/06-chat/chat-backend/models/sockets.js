const { verifyJWT } = require("../helpers/jwt");
const { userConnected, userDisconnected, getUsers, saveMessages } = require("../controllers/sockets");


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

            await userConnected( uid );

            // Join user to socket room
            socket.join( uid );


            // TODO: validate JWT
            // is not valid token. disconect

            // TODO: user actived

            // TODO: Emit all users online
            this.io.emit('list-users', await getUsers());

            // TODO: Socket join, uid

            // TODO: Listen when the client send a message
            socket.on('personal-message', async( payload ) => {
                const message = await saveMessages( payload );
                this.io.to( payload.to ).emit('personal-message', message );
                this.io.to( payload.from ).emit('personal-message', message );
            });

            // TODO: Disconnect

            // TODO: emit all user connected
            socket.on('disconnect', async() => {
                console.log('Client disconected', uid);
                await userDisconnected( uid );
                this.io.emit('list-users', await getUsers());
            })

        });
    }


}


module.exports = Sockets;