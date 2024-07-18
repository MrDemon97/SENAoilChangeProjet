const mongoose = require("mongoose");

const mantenimientoSchema = new mongoose.Schema({
    vehiculo: {
        placa: { type: String, required: true },
        modelo: { type: String, required: true },
        propietario: {
            nombre: { type: String, required: true },
            numeroId: { type: String, required: true }
        },
    },

    fecha: { type: Date, default: Date.now, required: true },
    
    kilometraje: { type: Number, required: true },
    
    aceitesUsados: [{
        referencia: { type: String, required: true },
        marca: { type: String, required: true },
        cantidad: { type: Number, required: true }
    }],

    filtroAceite:[{
        referencia: { type: String, required: true },
        marca: { type: String, required: true },
    }],

    filtroAire: [{
        referencia: { type: String, required: true },
        marca: { type: String, required: true },        
    }],  
    
    tecnico: {
        nombre: { type: String, required: true },
        numeroId: { type: String, required: true }
    }
});

module.exports = mongoose.model("Mantenimiento", mantenimientoSchema);
