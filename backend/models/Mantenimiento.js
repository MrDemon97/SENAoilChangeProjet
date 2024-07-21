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
        type: {
            _id: Schema.Types.ObjectId,
            placa: String,
            propietario: {
                nombre: String,
                numeroId: String
            },
            modelo: {
                ano: Number,
                marca: String,
                serie: String
            }
        },
        required: true
    },
    aceite: {
        tipo1: {
            referencia: String,
            marca: String,
            presentacion: String,
            tipo: String,
            cantidad: Number
        },
        tipo2: {
            referencia: String,
            marca: String,
            presentacion: String,
            tipo: String,
            cantidad: Number
        }
    },
    filtro: {
        aire: {
            referencia: String,
            marca: String,
            tipo: String
        },
        aceite: {
            referencia: String,
            marca: String,
            tipo: String
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
