/* -------------------------------------------------------------------------- */
/*                             Path: api/messages                             */
/* -------------------------------------------------------------------------- */

const { Router } = require('express');
const { getChat } = require('../controllers/messages');
const { validatorJWT } = require('../middlewares/validator-jwt');

const router = Router();

router.get('/:from', validatorJWT, getChat);

module.exports = router;
