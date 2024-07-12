const mongoose = require("mongoose");

const mantenimientoSchema = new mongoose.Schema({
    vehiculo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Vehiculo",
        required: true,
    },

    fecha: {
        type: Date,
        default: Date.now,
        required: true,
    },

    kilometraje: {
        type: Number,
        required: true,
    },

    cantidadAceite: {
        type: Number,
        required: true,
    },

    aceiteUtilizado: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Aceite",
        required: true,
    },

    filtroAceite: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Filtro",
        required: true,
    },

    filtroAire: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Filtro",
        required: true,
    },
    tecnico: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Tecnico",
        required: true,
    },
});

module.exports = mongoose.model("Mantenimiento", mantenimientoSchema);
