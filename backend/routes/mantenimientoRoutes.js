const express = require('express');
const router = express.Router();
const mantenimientoCtrl = require('../controllers/mantenimientoCtrl');

// Obtener todos los datos para llenar el formulario de mantenimiento
router.get('/datos', mantenimientoCtrl.obtenerDatosFormulario);

// Crear un nuevo registro de mantenimiento
router.post('/', mantenimientoCtrl.crearMantenimiento);

// Listar todos los mantenimientos
router.get('/', mantenimientoCtrl.listarMantenimientos);

// Listar mantenimientos por rango de fechas
router.get('/rango-fechas', mantenimientoCtrl.listarMantenimientosPorRangoFecha);

// Listar mantenimientos por fecha específica
router.get('/fecha', mantenimientoCtrl.listarMantenimientosPorFecha);

// Listar mantenimientos por número ID del técnico
router.get('/tecnico', mantenimientoCtrl.listarMantenimientosPorNumeroIdTecnico);

// Listar mantenimientos por placa del vehículo
router.get('/vehiculo', mantenimientoCtrl.listarMantenimientosPorPlacaVehiculo);

// Listar mantenimientos por ID del propietario
router.get('/propietario', mantenimientoCtrl.listarMantenimientosPorIdPropietario);

// Eliminar un mantenimiento por ID
router.delete('/:id', mantenimientoCtrl.eliminarMantenimiento);

module.exports = router;
