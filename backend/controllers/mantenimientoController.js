const Mantenimiento = require('../models/Mantenimiento');

const mantenimientoCtrl = {};

// Crear un nuevo registro de mantenimiento
mantenimientoCtrl.createMantenimiento = async (req, res) => {
    // Extraemos los datos del cuerpo de la solicitud
    const { vehiculo, fecha, kilometraje, cantidadAceite, aceiteUtilizado, filtroAceite, filtroAire, tecnico } = req.body;
    // Creamos una nueva instancia del modelo Mantenimiento con los datos proporcionados
    const newMantenimiento = new Mantenimiento({ vehiculo, fecha, kilometraje, cantidadAceite, aceiteUtilizado, filtroAceite, filtroAire, tecnico });
    try {
        // Intentamos guardar el nuevo documento en la base de datos
        const savedMantenimiento = await newMantenimiento.save();
        // Enviamos el documento guardado en formato JSON con el código de estado 201 (Creado)
        res.status(201).json(savedMantenimiento);
    } catch (err) {
        // Si ocurre un error, enviamos una respuesta con el código de estado 400 y un mensaje de error
        res.status(400).json({ message: err.message });
    }
};

// Obtener todos los registros de mantenimiento (opcionalmente filtrados por fecha)
mantenimientoCtrl.getMantenimientos = async (req, res) => {
    try {
        // Creamos un objeto de consulta vacío
        let query = {};
        // Si se proporciona una fecha en la consulta, la añadimos al objeto de consulta
        if (req.query.fecha) {
            query.fecha = req.query.fecha; // Filtrar por fecha si se proporciona en la consulta
        }
        // Intentamos obtener todos los documentos de la colección Mantenimiento que coincidan con la consulta
        // Usamos populate para obtener los documentos relacionados de las colecciones vehiculo, aceiteUtilizado, filtroAceite, filtroAire y tecnico
        const mantenimientos = await Mantenimiento.find(query).populate('vehiculo aceiteUtilizado filtroAceite filtroAire tecnico');
        // Enviamos los documentos obtenidos en formato JSON como respuesta
        res.json(mantenimientos);
    } catch (err) {
        // Si ocurre un error, enviamos una respuesta con el código de estado 500 y un mensaje de error
        res.status(500).json({ message: err.message });
    }
};

// Exportamos el objeto mantenimientoCtrl para que pueda ser utilizado en otras partes de la aplicación
module.exports = mantenimientoCtrl;