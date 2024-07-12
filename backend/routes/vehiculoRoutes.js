const express = require('express');
const router = express.Router();
const vehiculoCtrl = require("../controllers/vehiculoController");

// Obtener todos los vehículos
router.get("/", vehiculoCtrl.getVehiculos);

// Crear un nuevo vehículo
router.post("/", vehiculoCtrl.createVehiculo);

// Obtener un vehículo por su Placa
router.get("/:placa", vehiculoCtrl.getVehiculosByPlaca);

// Actualizar un vehículo por su Placa
router.put("/:placa", vehiculoCtrl.updateVehiculoByPlaca);

// Eliminar un vehículo por su Placa
router.delete("/:placa", vehiculoCtrl.deleteVehiculoByPlaca);

module.exports = router;
