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

// Obtener todos los registros de mantenimiento (opcionalmente filtrados por fecha, técnico, placa del vehículo y número de identificación del propietario del vehículo)
mantenimientoCtrl.getMantenimientos = async (req, res) => {
    try {
        // Creamos un objeto de consulta vacío
        let query = {};

        // Si se proporciona una fecha en la consulta, la añadimos al objeto de consulta
        if (req.query.fecha) {
            query.fecha = req.query.fecha;
        }

        // Si se proporciona el nombre del técnico en la consulta, la añadimos al objeto de consulta
        if (req.query.tecnicoNombre) {
            query['tecnico.nombre'] = req.query.tecnicoNombre;
        }

        // Si se proporciona el número de identificación del técnico en la consulta, la añadimos al objeto de consulta
        if (req.query.tecnicoNumeroId) {
            query['tecnico.numeroId'] = req.query.tecnicoNumeroId;
        }

        // Si se proporciona la placa del vehículo en la consulta, la añadimos al objeto de consulta
        if (req.query.placaVehiculo) {
            const vehiculo = await Vehiculo.findOne({ placa: req.query.placaVehiculo });
            if (vehiculo) {
                query.vehiculo = vehiculo._id;
            } else {
                return res.status(404).json({ message: 'Vehículo no encontrado' });
            }
        }

        // Si se proporciona el número de identificación del propietario del vehículo en la consulta, la añadimos al objeto de consulta
        if (req.query.numeroIdPropietario) {
            const vehiculos = await Vehiculo.find({ 'propietario.numeroId': req.query.numeroIdPropietario });
            if (vehiculos.length > 0) {
                query.vehiculo = { $in: vehiculos.map(vehiculo => vehiculo._id) };
            } else {
                return res.status(404).json({ message: 'Propietario no encontrado' });
            }
        }

        // Intentamos obtener todos los documentos de la colección Mantenimiento que coincidan con la consulta
        // Usamos populate para obtener los documentos relacionados de las colecciones vehiculo, aceiteUtilizado, filtroAceite, filtroAire y tecnico
        const mantenimientos = await Mantenimiento.find(query)
            .populate('vehiculo', 'placa propietario')
            .populate('aceiteUtilizado', 'referencia marca tipo')
            .populate('filtroAceite', 'referencia marca tipo')
            .populate('filtroAire', 'referencia marca tipo');

        // Enviamos los documentos obtenidos en formato JSON como respuesta
        res.json(mantenimientos);
    } catch (err) {
        // Si ocurre un error, enviamos una respuesta con el código de estado 500 y un mensaje de error
        res.status(500).json({ message: err.message });
    }
};

// Exportamos el objeto mantenimientoCtrl para que pueda ser utilizado en otras partes de la aplicación
module.exports = mantenimientoCtrl;