require('dotenv').config()
const app = require('./server/server');

const SERVER_PORT = process.env.SERVER_PORT;

app.listen(SERVER_PORT, () => {
  console.log(`Listening on port ${SERVER_PORT}`);
});
