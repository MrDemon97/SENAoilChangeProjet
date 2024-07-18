const express = require('express');
const router = express.Router();
const mantenimientoCtrl = require('../controllers/mantenimientoController');

// Rutas para Mantenimientos
router.get('/', mantenimientoCtrl.getMantenimientos);
router.get('/:_id', mantenimientoCtrl.getMantenimientoById);
router.post('/', mantenimientoCtrl.createMantenimiento);
router.delete('/:_id', mantenimientoCtrl.deleteMantenimiento);
router.get('/fecha', mantenimientoCtrl.getMantenimientosByFecha);
router.get('/tecnico', mantenimientoCtrl.getMantenimientosByTecnicoId);
router.get('/propietario', mantenimientoCtrl.getMantenimientosByPropietarioId);
router.get('/placa', mantenimientoCtrl.getMantenimientosByPlaca);

module.exports = router;
