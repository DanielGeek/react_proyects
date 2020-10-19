/*
    Rutas de Usuarios / Auth
    host + /api/auth
*/
const { Router } = require('express');
const router = Router();

const { crearUsuario, loginusuario, revalidarToken } = require('../controllers/auth');

router.post('/new', crearUsuario );


router.post('/', loginusuario );

router.get('/renew', revalidarToken );


module.exports = router;