const express = require('express');
const router = express.Router();
const vehiculoCtrl = require("../controllers/vehiculoController");

// Obtener todos los vehículos
router.get("/", vehiculoCtrl.getVehiculos);

// Obtener todos los propietarios
router.get("/propietarios", vehiculoCtrl.getPropietarios);


// Obtener vehiculo por su placa
router.get("/:placa", vehiculoCtrl.getVehiculoByPlaca);

//Obtener vehiculos por numero id propietario
router.get("/propietario/:numeroId", vehiculoCtrl.getVehiculosByPropietarioId);

// Crear un nuevo vehículo
router.post("/", vehiculoCtrl.createVehiculo);

// Actualizar vehiculo por id
router.put("/:_id", vehiculoCtrl.updateVehiculo);

// Eliminar vehiculo por id 
router.delete("/:_id", vehiculoCtrl.deleteVehiculo);

module.exports = router;
