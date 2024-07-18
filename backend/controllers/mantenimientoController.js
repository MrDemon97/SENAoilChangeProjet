const Mantenimiento = require('../models/Mantenimiento');
const Vehiculo = require('../models/Vehiculo');

const mantenimientoCtrl = {};

// Obtener todos los mantenimientos
mantenimientoCtrl.getMantenimientos = async (req, res) => {
    try {
        const mantenimientos = await Mantenimiento.find();
        res.json(mantenimientos);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Obtener mantenimiento por ID
mantenimientoCtrl.getMantenimientoById = async (req, res) => {
    const id = req.params.id;

    try {
        const mantenimiento = await Mantenimiento.findById(id);
        if (!mantenimiento) {
            return res.status(404).json({ message: 'Mantenimiento no encontrado' });
        }
        res.json(mantenimiento);
    } catch (err) {
        res.status(500).json({ message: err.message });
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
            return res.status(404).json({ message: 'Vehículo no encontrado' });
        }

        // Crear el mantenimiento con referencias resueltas
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
        res.status(201).json(mantenimientoGuardado);

    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Eliminar un mantenimiento por ID
mantenimientoCtrl.deleteMantenimiento = async (req, res) => {
    const id = req.params.id;

    try {
        const mantenimiento = await Mantenimiento.findByIdAndDelete(id);
        if (!mantenimiento) {
            return res.status(404).json({ message: 'Mantenimiento no encontrado' });
        }
        res.json({ message: 'Mantenimiento eliminado' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Listar mantenimientos por fecha (formato: yyyy-mm-dd)
mantenimientoCtrl.getMantenimientosByFecha = async (req, res) => {
    const fecha = req.query.fecha;

    try {
        const mantenimientos = await Mantenimiento.find({ fecha: { $gte: new Date(fecha), $lt: new Date(fecha + 'T23:59:59.999Z') } });
        res.json(mantenimientos);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Listar mantenimientos por ID del técnico
mantenimientoCtrl.getMantenimientosByTecnicoId = async (req, res) => {
    const tecnicoId = req.query.tecnicoId;

    try {
        const mantenimientos = await Mantenimiento.find({ 'tecnico.numeroId': tecnicoId });
        res.json(mantenimientos);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Listar mantenimientos por ID del propietario del vehículo
mantenimientoCtrl.getMantenimientosByPropietarioId = async (req, res) => {
    const propietarioId = req.query.propietarioId;

    try {
        const mantenimientos = await Mantenimiento.find({ 'vehiculo.idPropietario': propietarioId });
        res.json(mantenimientos);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Listar mantenimientos por placa del vehículo
mantenimientoCtrl.getMantenimientosByPlaca = async (req, res) => {
    const placa = req.query.placa;

    try {
        const mantenimientos = await Mantenimiento.find({ 'vehiculo.placa': placa });
        res.json(mantenimientos);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = mantenimientoCtrl;
