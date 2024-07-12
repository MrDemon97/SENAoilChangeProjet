const mongoose = require('mongoose');
const { type } = require('os');

const aceiteSchema = new mongoose.Schema({
    referencia:{ 
        type: String,
        required: true
    },
    
    marca: String,
    presentacion: {
        type: String,
        enum: ['Galon 4L', 'Galon 5L', 'Cuarto Sellado', 'Cuarto Granel'],
        required: true,
    },
    
    tipo: {
        type: String,
        enum: ['Sintético', 'Semi', 'Mineral'],
        required: true,
    }
});

module.exports = mongoose.model('Aceite', aceiteSchema);