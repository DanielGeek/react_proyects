/* -------------------------------------------------------------------------- */
/*                               Path: api/login                              */
/* -------------------------------------------------------------------------- */
const { Router } = require('express');
const { createUser, loginUser, renewToken } = require('../controllers/auth');

const router = Router();

// Create new users
router.post('/new', createUser);

// Login
router.post('/', loginUser);

// Revalidate token
router.get('/renew', renewToken);

module.exports = router;