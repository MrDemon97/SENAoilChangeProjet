const mongoose = require('mongoose');

const vehiculoSchema = new mongoose.Schema({
    placa:{
        type: String,
        required: true,
    },

    propietario: {
        nombre: {
            type: String,
            required: true,
        },

        numeroId:{
            type: String,
            required: true,
        },        
    },

    modelo: {
        ano:{
            type: Number,
            requiered: true,

        },

        marca:{
            type: String,
            required: true,
        },

        serie:{
            type: String,
            requires: true,
        },
    },

});

module.exports = mongoose.model('Vehiculo', vehiculoSchema);
