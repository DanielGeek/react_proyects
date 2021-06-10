/* -------------------------------------------------------------------------- */
/*                               Path: api/login                              */
/* -------------------------------------------------------------------------- */
const { Router } = require('express');
const { check } = require('express-validator');

const { createUser, loginUser, renewToken } = require('../controllers/auth');

const router = Router();

// Create new users
router.post('/new', createUser);

// Login
router.post('/', [
    check('email', 'El email es obligatorio').isEmail(),
    check('password', 'El password es obligatorio').not().isEmpty()
], loginUser);

// Revalidate token
router.get('/renew', renewToken);

module.exports = router;