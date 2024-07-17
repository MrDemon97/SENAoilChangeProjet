const mongoose = require('mongoose');
const { Schema } = mongoose;

const aceiteSchema = new Schema({
  referencia: {
    type: String,
    required: true
  },
  marca: {
    type: String,
    required: true
  },
  presentacion: {
    type: String,
    enum: ['Galon 4L', 'Galon 5L', 'Cuarto Sellado', 'Cuarto Granel'],
    required: true
  },
  tipo: {
    type: String,
    enum: ['Sintético', 'Semi', 'Mineral'],
    required: true
  }
});

module.exports = mongoose.model('Aceite', aceiteSchema);
