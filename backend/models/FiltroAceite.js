const mongoose = require('mongoose');

const filtroAceiteSchema = new mongoose.Schema({
    referencia:{
        type: String,
        required: true,
    },
    marca: String,

});

module.exports = mongoose.model('FiltroAire', filtroAireSchema);