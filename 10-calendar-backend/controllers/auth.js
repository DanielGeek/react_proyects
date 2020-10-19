const { response } = require('express');

const crearUsuario = (req, res = response ) => {

    res.json({
        ok: true,
        msg: 'registro'
    })
}

const loginusuario = (req, res = response ) => {

    res.json({
        ok: true,
        msg: 'login'
    })
};

const revalidarToken = (req, res = response ) => {

    res.json({
        ok: true,
        msg: 'renew'
    })
};

module.exports = {
    crearUsuario,
    loginusuario,
    revalidarToken
}