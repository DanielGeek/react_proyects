const Server = require('./models/server');
// para poder leer las variables de entorno .env
require('dotenv').config();

const server = new Server();

server.execute();