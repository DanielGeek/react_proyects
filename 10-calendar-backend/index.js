const express = require('express');
require('dotenv').config();




// Crear el servidor de express
const app = express();


// Directorio Público
app.use(express.static('public'));

// Rutas
// app.get('/', (req, res) => {

//     res.json({
//         ok: true
//     })
// });

app.set('PORT', 4000 || process.env.PORT);
// Escuchar peticiones
app.listen(app.get('PORT'), () => {
    console.log(`Servidor corriendo en puerto ${app.get('PORT')}`);
})