const express = require('express');
const router = express.Router();
const vehiculoCtrl = require('../controllers/vehiculoController');

router.post('/', vehiculoCtrl.createVehiculo);
router.get('/', vehiculoCtrl.getVehiculos);
router.get('/:id', vehiculoCtrl.getVehiculoById);
router.put('/:id', vehiculoCtrl.updateVehiculo);
router.delete('/:id', vehiculoCtrl.deleteVehiculo);

module.exports = router;