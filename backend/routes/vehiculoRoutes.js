const express = require('express');
const router = express.Router();
const vehiculoCtrl = require("../controllers/vehiculoController");

// Obtener todos los vehículos
router.get("/", vehiculoCtrl.getVehiculos);

// Obtener un vehículo por su Placa
router.get("/:placa", vehiculoCtrl.getVehiculoByPlaca);

// Crear un nuevo vehículo
router.post("/", vehiculoCtrl.createVehiculo);

// Actualizar un vehículo por su Placa
router.put("/:placa", vehiculoCtrl.updateVehiculo);

// Eliminar un vehículo por su Placa
router.delete("/:placa", vehiculoCtrl.deleteVehiculo);

module.exports = router;
