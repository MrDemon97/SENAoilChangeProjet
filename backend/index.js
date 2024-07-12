const express = require('express');
const morgan = require('morgan');
const cors = require("cors");
const connectDB = require('./database');

const app = express();

//conectamos la base de datos
connectDB();

//configuraciones

app.set('port',process.env.PORT || 5000);
app.use(morgan('dev'));
app.use(express.json());
app.use(cors({origin: 'http://localhost:4200'}));

//Rutas del servidor

app.use('/api/vehiculos', require('./routes/vehiculoRoutes'));
app.use('/api/aceites', require('./routes/aceiteRoutes'));
app.use('/api/filtros', require('./routes/filtroRoutes'));
app.use('/api/mantenimientos', require('./routes/mantenimientoRoutes'));

// Inicamos el servidor

app.listen(app.get('port'), () =>{
    console.log('Servidor corriendo en el puerto', app.get('port'));
});


