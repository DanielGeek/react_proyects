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
    check('name', 'The name is required').not().isEmpty(),
    check('password', 'The password is required').not().isEmpty(),
    check('email', 'The email is required').isEmail(),
    campsValidator
], createUser);

// Login
router.post('/', [
    check('email', 'The email is required').isEmail(),
    check('password', 'The password is required').not().isEmpty(),
    campsValidator
], loginUser);

// Revalidate token
router.get('/renew', validatorJWT, renewToken);

module.exports = router;