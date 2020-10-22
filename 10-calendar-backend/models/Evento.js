const { Schema, model } = require('mongoose');

const EventoSchema = Schema({

    title: {
        type: String,
        required: true
    },
    notes: {
        type: String,
    },
    start: {
        type: Date,
        required: true
    },
    end: {
        type: Date,
        required: true
    },
    // uid del usuario que creo el evento, enviado en el json web token
    user: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    }
},
    {
        timestamps: true
    });

EventoSchema.method('toJSON', function () {
    // sustraigo el campo __v y _id, para mostrarlos modificados en la respuesta
    const { __v, _id, ...object } = this.toObject();
    // cambio el atributo _id por id para mostrarlo en la respuesta
    object.id = _id;
    return object;
});

module.exports = model('Evento', EventoSchema);