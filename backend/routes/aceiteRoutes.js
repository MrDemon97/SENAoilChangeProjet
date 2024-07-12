const express = require('express');
const router = express.Router();
const aceiteCtrl = require("../controllers/aceiteController");

// Obtener todos los aceites
router.get("/", aceiteCtrl.getAceites);

// Crear un nuevo aceite
router.post("/", aceiteCtrl.createAceite);

// Obtener un aceite por su referencia
router.get("/:referencia", aceiteCtrl.getAceiteByReferencia);

// Actualizar un aceite por su referencia
router.put("/:referencia", aceiteCtrl.updateAceite);

// Eliminar un aceite por su referencia
router.delete("/:referencia", aceiteCtrl.deleteAceite);

module.exports = router;