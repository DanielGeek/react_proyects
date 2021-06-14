const { response } = require('express');
const bcrypt = require('bcryptjs');

const User = require('../models/user');
const { generateJWT } = require('../helpers/jwt');

const createUser = async(req, res = response) => {

  try {

    const { email, password } = req.body;

    const existEmail = await User.findOne({ email });

    if ( existEmail ) {
      return res.status(400).json({
        ok: false,
        msg: 'This email exist'
      })
    }


    const user = new User( req.body );

    // encrypt password
    const salt = bcrypt.genSaltSync();
    user.password = bcrypt.hashSync( password, salt );

    // save user on DB
    await user.save();

    // Generate JWT
    const token = await generateJWT(user.id);

    res.json({
      ok: true,
      user,
      token
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: 'Hable con el administrador'
    });
  }

}

const loginUser = async(req, res) => {

  const { email, password } = req.body;

  try {

    // Verify email
    const userDB = await User.findOne({ email });
    if( !userDB ) {
      return res.status(404).json({
        ok: false,
        msg: 'Email not found'
      });
    }

    // Verify password
    const validPassword = bcrypt.compareSync( password, userDB.password );
    if ( !validPassword ) {
      return res.status(404).json({
        ok: false,
        msg: 'The password is not correct'
      });
    }

    // Generate JWT
    const token = await generateJWT( userDB.id );

    res.json({
      ok: true,
      user: userDB,
      token
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: 'Hable con el administrador'
    });
  }
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