const { Schema, model } = require('mongoose');

const RpsSchema = Schema({

    name: {
        type: String,
        required: true
    }
},
    {
        timestamps: true
    });

    RpsSchema.method('toJSON', function () {
    // sustraigo el campo __v y _id, para mostrarlos modificados en la respuesta
    const { __v, _id, ...object } = this.toObject();
    // cambio el atributo _id por id para mostrarlo en la respuesta
    object.id = _id;
    return object;
});

module.exports = model('Rps', RpsSchema);