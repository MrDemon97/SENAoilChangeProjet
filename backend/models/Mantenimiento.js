const mongoose = require('mongoose');
const { Schema } = mongoose;

const mantenimientoSchema = new Schema({
    fecha: {
        type: Date,
        required: true
    },
    kilometraje: {
        type: Number,
        required: true
    },
    vehiculo: {
        type: Schema.Types.ObjectId,
        ref: 'Vehiculo',
        required: true
    },
    aceite: {
        tipo1: {
            type: Schema.Types.ObjectId,
            ref: 'Aceite'
        },
        tipo2: {
            type: Schema.Types.ObjectId,
            ref: 'Aceite'
        }
    },
    filtro: {
        aire: {
            type: Schema.Types.ObjectId,
            ref: 'Filtro'
        },
        aceite: {
            type: Schema.Types.ObjectId,
            ref: 'Filtro'
        }
    },
    tecnico: {
        numeroId: {
            type: String,
            required: true
        },
        nombre: {
            type: String,
            required: true
        }
    }
});

module.exports = mongoose.model('Mantenimiento', mantenimientoSchema);
