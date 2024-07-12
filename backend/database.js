const mongoose = require('mongoose');
const URI = 'mongodb://127.0.0.1:27017/mantenimiento_vehiculos';

const connectDB = async () => {
  try {
    // Conexión a MongoDB usando mongoose
    await mongoose.connect(URI, {
      useNewUrlParser: true,      
      // Configuración para evitar advertencias de deprecación relacionadas con la URL de conexión
      useUnifiedTopology: true,   
      // Configuración para evitar advertencias de deprecación relacionadas con el motor de conexión
    });
    console.log('MongoDB conectado');  
    // Mensaje de éxito si la conexión es exitosa


  } catch (error) {
    console.error(error.message);   // Mensaje de error si la conexión falla
    process.exit(1);    // Salir del proceso con código de error 1
  }
};

module.exports = connectDB;   
// Exportar la función connectDB para ser utilizada en otros archivos
