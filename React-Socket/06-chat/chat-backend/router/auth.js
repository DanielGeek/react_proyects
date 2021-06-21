/* -------------------------------------------------------------------------- */
/*                               Path: api/login                              */
/* -------------------------------------------------------------------------- */
const { Router } = require('express');
const { check } = require('express-validator');

const { createUser, loginUser, renewToken } = require('../controllers/auth');
const { campsValidator } = require('../middlewares/camps-validator');
const { validatorJWT } = require('../middlewares/validator-jwt');

const router = Router();

// Create new users
router.post('/new', [
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('password', 'El password es obligatorio').not().isEmpty(),
    check('email', 'El email es obligatorio').isEmail(),
    campsValidator
], createUser);

// Login
router.post('/', [
    check('email', 'El email es obligatorio').isEmail(),
    check('password', 'El password es obligatorio').not().isEmpty(),
    campsValidator
], loginUser);

// Revalidate token
router.get('/renew', validatorJWT, renewToken);

module.exports = router;