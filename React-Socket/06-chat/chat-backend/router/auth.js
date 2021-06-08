const { Router } = require('express');

const router = Router();

// Create new users
router.post('/new', (req, res) => {
  res.json({
    ok: true,
    usuario: 'new'
  });
});

// Login
router.post('/', (req, res) => {
  res.json({
    ok: true,
    msg: 'login'
  });
});

// Revalidate token
router.get('/renew', (req, res) => {
  res.json({
    ok: true,
    msg: 'renew'
  });
});

module.exports = router;