const express = require('express');
const router = express.Router();
const mantenimientoCtrl = require('../controllers/mantenimientoController');

// Crear un nuevo registro de mantenimiento
router.post('/', mantenimientoCtrl.createMantenimiento);

// Obtener registros de mantenimiento, con filtros opcionales por técnico, fecha, placa del vehículo y número de identificación del propietario del vehículo
router.get('/', mantenimientoCtrl.getMantenimientos);

module.exports = router;