const mongoose = require('mongoose');
const {Schema} = mongoose;


const filtroSchema = new Schema({
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