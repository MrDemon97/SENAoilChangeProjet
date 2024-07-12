const mongoose = require('mongoose');
const URI = 'mongodb://127.0.0.1:27017/mantenimiento_vehiculos';

const connectDB = async () => {
  try {
    // Conexión a MongoDB usando mongoose
    await mongoose.connect(URI)  
        .then(() => console.log('MongoDB conectado'))
        .catch(err => console.log(err));
  } catch (error) {
    console.error(error.message);   // Mensaje de error si la conexión falla
    process.exit(1);    // Salir del proceso con código de error 1
  }
};
module.exports = connectDB;   
// Exportar la función connectDB para ser utilizada en otros archivos