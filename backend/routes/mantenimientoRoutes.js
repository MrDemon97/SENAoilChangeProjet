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

// Ruta para verificar si un mantenimiento ya existe se usa metodo POST
// Pues permite hacer consultas más complejas
router.post('/verificar', mantenimientoCtrl.checkMantenimiento);

module.exports = router;
