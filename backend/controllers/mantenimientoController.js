const Mantenimiento = require('../models/Mantenimiento');
const Vehiculo = require('../models/Vehiculo');

const mantenimientoCtrl = {};

// Obtener todos los mantenimientos
mantenimientoCtrl.getMantenimientos = async (req, res) => {
    try {
        // Buscar todos los documentos en la colección de mantenimientos
        const mantenimientos = await Mantenimiento.find();
        if (mantenimientos.length === 0) {
            // Si no hay mantenimientos, devolver un mensaje informativo
            return res.status(404).json({ message: 'No se encontraron mantenimientos.' });
        }
        // Devolver los mantenimientos encontrados en formato JSON
        res.json(mantenimientos);
    } catch (err) {
        // Manejo de errores en caso de que ocurra una excepción
        res.status(500).json({ message: 'Error al obtener mantenimientos: ' + err.message });
    }
};

// Obtener mantenimiento por ID
mantenimientoCtrl.getMantenimientoById = async (req, res) => {
    const id = req.params.id;

    try {
        // Buscar un mantenimiento específico por su ID
        const mantenimiento = await Mantenimiento.findById(id);
        if (!mantenimiento) {
            // Si no se encuentra el mantenimiento, devolver un error 404
            return res.status(404).json({ message: 'Mantenimiento no encontrado.' });
        }
        // Devolver el mantenimiento encontrado en formato JSON
        res.json(mantenimiento);
    } catch (err) {
        // Manejo de errores en caso de que ocurra una excepción
        res.status(500).json({ message: 'Error al obtener el mantenimiento: ' + err.message });
    }
};

// Crear un nuevo mantenimiento
mantenimientoCtrl.createMantenimiento = async (req, res) => {
    const {
        placa,
        fecha,
        kilometraje,
        aceitesUsados,
        filtroAceite,
        filtroAire,
        tecnicoNombre,
        tecnicoNumeroId
    } = req.body;

    try {
        // Buscar el vehículo por su placa para obtener su información
        const vehiculo = await Vehiculo.findOne({ placa });

        if (!vehiculo) {
            // Si no se encuentra el vehículo, devolver un error 404
            return res.status(404).json({ message: 'Vehículo no encontrado.' });
        }

        // Crear un nuevo objeto de mantenimiento con los datos proporcionados
        const nuevoMantenimiento = new Mantenimiento({
            vehiculo: {
                placa: vehiculo.placa,
                modelo: vehiculo.modelo,
                propietario: {
                    nombre: vehiculo.propietario.nombre,
                    numeroId: vehiculo.propietario.numeroId
                }
            },
            fecha,
            kilometraje,
            aceitesUsados,
            filtroAceite,
            filtroAire,
            tecnico: {
                nombre: tecnicoNombre,
                numeroId: tecnicoNumeroId
            }
        });

        // Guardar el nuevo mantenimiento en la base de datos
        const mantenimientoGuardado = await nuevoMantenimiento.save();
        // Devolver el mantenimiento creado en formato JSON
        res.status(201).json({ message: 'Mantenimiento creado exitosamente.', mantenimiento: mantenimientoGuardado });

    } catch (err) {
        // Manejo de errores en caso de que ocurra una excepción
        res.status(400).json({ message: 'Error al crear el mantenimiento: ' + err.message });
    }
};

// Eliminar un mantenimiento por ID
mantenimientoCtrl.deleteMantenimiento = async (req, res) => {
    const id = req.params.id;

    try {
        // Buscar y eliminar un mantenimiento específico por su ID
        const mantenimiento = await Mantenimiento.findByIdAndDelete(id);
        if (!mantenimiento) {
            // Si no se encuentra el mantenimiento, devolver un error 404
            return res.status(404).json({ message: 'Mantenimiento no encontrado.' });
        }
        // Devolver un mensaje de éxito
        res.json({ message: 'Mantenimiento eliminado exitosamente.' });
    } catch (err) {
        // Manejo de errores en caso de que ocurra una excepción
        res.status(500).json({ message: 'Error al eliminar el mantenimiento: ' + err.message });
    }
};

// Listar mantenimientos por fecha (formato: yyyy-mm-dd)
mantenimientoCtrl.getMantenimientosByFecha = async (req, res) => {
    const fecha = req.query.fecha;

    try {
        // Buscar mantenimientos por fecha, incluyendo todo el día especificado
        const mantenimientos = await Mantenimiento.find({ 
            fecha: { 
                $gte: new Date(fecha), 
                $lt: new Date(new Date(fecha).setHours(23, 59, 59, 999)) 
            } 
        });
        if (mantenimientos.length === 0) {
            // Si no se encuentran mantenimientos para la fecha, devolver un mensaje informativo
            return res.status(404).json({ message: 'No se encontraron mantenimientos para la fecha especificada.' });
        }
        // Devolver los mantenimientos encontrados en formato JSON
        res.json(mantenimientos);
    } catch (err) {
        // Manejo de errores en caso de que ocurra una excepción
        res.status(500).json({ message: 'Error al obtener mantenimientos por fecha: ' + err.message });
    }
};

// Listar mantenimientos por ID del técnico
mantenimientoCtrl.getMantenimientosByTecnicoId = async (req, res) => {
    const tecnicoId = req.query.tecnicoId;

    try {
        // Buscar mantenimientos por el ID del técnico
        const mantenimientos = await Mantenimiento.find({ 'tecnico.numeroId': tecnicoId });
        if (mantenimientos.length === 0) {
            // Si no se encuentran mantenimientos para el técnico, devolver un mensaje informativo
            return res.status(404).json({ message: 'No se encontraron mantenimientos para el técnico especificado.' });
        }
        // Devolver los mantenimientos encontrados en formato JSON
        res.json(mantenimientos);
    } catch (err) {
        // Manejo de errores en caso de que ocurra una excepción
        res.status(500).json({ message: 'Error al obtener mantenimientos por ID del técnico: ' + err.message });
    }
};

// Listar mantenimientos por ID del propietario del vehículo
mantenimientoCtrl.getMantenimientosByPropietarioId = async (req, res) => {
    const propietarioId = req.query.propietarioId;

    try {
        // Buscar mantenimientos por el ID del propietario del vehículo
        const mantenimientos = await Mantenimiento.find({ 'vehiculo.propietario.numeroId': propietarioId });
        if (mantenimientos.length === 0) {
            // Si no se encuentran mantenimientos para el propietario, devolver un mensaje informativo
            return res.status(404).json({ message: 'No se encontraron mantenimientos para el propietario especificado.' });
        }
        // Devolver los mantenimientos encontrados en formato JSON
        res.json(mantenimientos);
    } catch (err) {
        // Manejo de errores en caso de que ocurra una excepción
        res.status(500).json({ message: 'Error al obtener mantenimientos por ID del propietario: ' + err.message });
    }
};

// Listar mantenimientos por placa del vehículo
mantenimientoCtrl.getMantenimientosByPlaca = async (req, res) => {
    const placa = req.query.placa;

    try {
        // Buscar mantenimientos por la placa del vehículo
        const mantenimientos = await Mantenimiento.find({ 'vehiculo.placa': placa });
        if (mantenimientos.length === 0) {
            // Si no se encuentran mantenimientos para la placa, devolver un mensaje informativo
            return res.status(404).json({ message: 'No se encontraron mantenimientos para la placa especificada.' });
        }
        // Devolver los mantenimientos encontrados en formato JSON
        res.json(mantenimientos);
    } catch (err) {
        // Manejo de errores en caso de que ocurra una excepción
        res.status(500).json({ message: 'Error al obtener mantenimientos por placa: ' + err.message });
    }
};

mantenimientoCtrl.checkMantenimiento = async (req, res) => {
    try {
      const mantenimientoData = req.body;
      // Verificar si ya existe un mantenimiento con los mismos datos
      const existingMantenimiento = await Mantenimiento.findOne({
        'vehiculo.placa': mantenimientoData.vehiculo.placa,
        'vehiculo.propietario.numeroId': mantenimientoData.vehiculo.propietario.numeroId,
        fecha: mantenimientoData.fecha,
        kilometraje: mantenimientoData.kilometraje,
        'aceitesUsados.aceiteUsado1.referencia': mantenimientoData.aceitesUsados.aceiteUsado1.referencia,
        'aceitesUsados.aceiteUsado2.referencia': mantenimientoData.aceitesUsados.aceiteUsado2.referencia,
        'filtroAceite.referencia': mantenimientoData.filtroAceite.referencia,
        'filtroAire.referencia': mantenimientoData.filtroAire.referencia,
        'tecnico.numeroId': mantenimientoData.tecnico.numeroId
      });
  
      // Enviar respuesta indicando si el mantenimiento existe o no
      if (existingMantenimiento) {
        return res.status(200).json(true);
      } else {
        return res.status(200).json(false);
      }
    } catch (error) {
      console.error('Error al verificar el mantenimiento:', error);
      return res.status(500).json({ message: 'Error en el servidor' });
    }
  };

module.exports = mantenimientoCtrl;
