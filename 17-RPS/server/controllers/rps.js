const { response } = require('express');
const Rps = require('../models/Rps');

const getWinners = async (req, res = response) => {

    // traer los winners del RPS
    const winners = await Rps.find();

    res.json({
        ok: true,
        winners
    })
}

const crearWinner = async (req, res = response) => {

    const winner = new Rps(req.body);
    console.log(req.body);

    try {


        const winnerGuardado = await winner.save();

        res.json({
            ok: true,
            winner: winnerGuardado
        })

    } catch (error) {

        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        });
    }
}

module.exports = {
    getWinners,
    crearWinner
}