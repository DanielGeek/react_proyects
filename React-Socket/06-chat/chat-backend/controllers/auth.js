const { response } = require('express');

const createUser = async(req, res = response) => {
  res.json({
    ok: true,
    msg: 'new'
  });
}

const loginUser = async(req, res) => {

  const { email, password } = req.body;

  res.json({
    ok: true,
    msg: 'login',
    email,
    password
  });
}

const renewToken = async(req, res) => {
  res.json({
    ok: true,
    msg: 'renew'
  });
}

module.exports = {
  createUser,
  loginUser,
  renewToken
}