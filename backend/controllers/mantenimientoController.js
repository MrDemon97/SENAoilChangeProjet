const Mantenimiento = require('../models/Mantenimiento');
const aceiteCtrl = require('../services/aceiteCtrl'); // Ruta al servicio de aceites
const filtroCtrl = require('../services/filtroCtrl'); // Ruta al servicio de filtros
const vehiculoCtrl = require('../services/vehiculoCtrl'); // Ruta al servicio de vehículos

const mantenimientoCtrl = {};

// Obtener todos los datos necesarios para llenar el formulario
mantenimientoCtrl.obtenerDatosFormulario = async (req, res) => {
    try {
        // Obtener todos los aceites
        const aceites = await aceiteCtrl.getAceites();
        // Obtener todos los filtros
        const filtros = await filtroCtrl.getFiltros();
        // Obtener todos los vehículos
        const vehiculos = await vehiculoCtrl.getVehiculos();

        res.json({
            aceites,
            filtros,
            vehiculos
        });
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener datos' });
    }
};

// Crear un nuevo registro de mantenimiento
mantenimientoCtrl.crearMantenimiento = async (req, res) => {
    try {
        const mantenimiento = new Mantenimiento(req.body);
        await mantenimiento.save();
        res.status(201).json(mantenimiento);
    } catch (error) {
        res.status(400).json({ error: 'Error al crear mantenimiento' });
    }
};

// Listar todos los mantenimientos
mantenimientoCtrl.listarMantenimientos = async (req, res) => {
    try {
        const mantenimientos = await Mantenimiento.find();
        res.json(mantenimientos);
    } catch (error) {
        res.status(500).json({ error: 'Error al listar mantenimientos' });
    }
};

// Listar mantenimientos por rango de fechas
mantenimientoCtrl.listarMantenimientosPorRangoFecha = async (req, res) => {
    const { fechaInicio, fechaFin } = req.query;
    try {
        const mantenimientos = await Mantenimiento.find({
            fecha: { $gte: new Date(fechaInicio), $lte: new Date(fechaFin) }
        });
        res.json(mantenimientos);
    } catch (error) {
        res.status(500).json({ error: 'Error al listar mantenimientos por rango de fecha' });
    }
};

// Listar mantenimientos por fecha específica
mantenimientoCtrl.listarMantenimientosPorFecha = async (req, res) => {
    const { fecha } = req.query;
    try {
        const mantenimientos = await Mantenimiento.find({ fecha: new Date(fecha) });
        res.json(mantenimientos);
    } catch (error) {
        res.status(500).json({ error: 'Error al listar mantenimientos por fecha' });
    }
};

// Listar mantenimientos por número ID del técnico
mantenimientoCtrl.listarMantenimientosPorNumeroIdTecnico = async (req, res) => {
    const { numeroIdTecnico } = req.query;
    try {
        const mantenimientos = await Mantenimiento.find({ 'tecnico.numeroId': numeroIdTecnico });
        res.json(mantenimientos);
    } catch (error) {
        res.status(500).json({ error: 'Error al listar mantenimientos por número ID del técnico' });
    }
};

// Listar mantenimientos por placa del vehículo
mantenimientoCtrl.listarMantenimientosPorPlacaVehiculo = async (req, res) => {
    const { placaVehiculo } = req.query;
    try {
        const mantenimientos = await Mantenimiento.find({ 'vehiculo.placa': placaVehiculo });
        res.json(mantenimientos);
    } catch (error) {
        res.status(500).json({ error: 'Error al listar mantenimientos por placa del vehículo' });
    }
};

// Listar mantenimientos por ID del propietario
mantenimientoCtrl.listarMantenimientosPorIdPropietario = async (req, res) => {
    const { idPropietario } = req.query;
    try {
        const mantenimientos = await Mantenimiento.find({ 'vehiculo.propietario.numeroId': idPropietario });
        res.json(mantenimientos);
    } catch (error) {
        res.status(500).json({ error: 'Error al listar mantenimientos por ID del propietario' });
    }

};

// Eliminar manteniento
mantenimientoCtrl.eliminarMantenimiento = async (req, res) => {
    const { id } = req.params;
    try {
        const mantenimiento = await Mantenimiento.findByIdAndDelete(id);
        if (!mantenimiento) {
            return res.status(404).json({ error: 'Mantenimiento no encontrado' });
        }
        res.json({ mensaje: 'Mantenimiento eliminado exitosamente' });
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar mantenimiento' });
    }
};

module.exports = mantenimientoCtrl;
