const express = require('express');
const router = express.Router();
const mantenimientoCtrl = require('../controllers/mantenimientoController');

router.post('/', mantenimientoCtrl.createMantenimiento);
router.get('/', mantenimientoCtrl.getMantenimientos);

module.exports = router;
