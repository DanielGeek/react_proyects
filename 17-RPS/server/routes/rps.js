/*
    RPS Routes
    /api/rps
*/

const { Router } = require('express');
const { check } = require('express-validator');


const { validarCampos } = require('../middlewares/validar-campos');
const { getWinners, crearWinner } = require('../controllers/rps');

const router = Router();


// Obtener winners
router.get('/', getWinners);

// Crear un nuevo Winner rps
router.post(
    '/',
    [
        check('name', 'El nombre es obligatorio').not().isEmpty(),
        validarCampos
    ],
    crearWinner);


module.exports = router;