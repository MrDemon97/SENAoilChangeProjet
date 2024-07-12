const mongoose = require('mongoose');

const filtroSchema = new mongoose.Schema({
    referencia:{
        type: String,
        required: true,
    },
    marca: {
        type: String,
        required: true,
    },

    tipo:{
        type: String,
        required: true,
        enum: ['Aire', 'Aceite']
    },

});

module.exports = mongoose.model('Filtro', filtroSchema);