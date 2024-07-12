const mongoose = require('mongoose');

const filtroAireSchema = new mongoose.Schema({
    referencia:{
        type: String,
        required: true,
    },
    marca: String,

});

module.exports = mongoose.model('FiltroAire', filtroAireSchema);