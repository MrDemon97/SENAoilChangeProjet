const express = require('express');
const router = express.Router();
const filtroCtrl = require('../controllers/filtroController');

// Obtener todos los filtros
router.get("/", filtroCtrl.getFiltros);

// Crear un nuevo filtro
router.post("/", filtroCtrl.createFiltro);

// Obtener un filtro por su referencia
router.get("/:referencia", filtroCtrl.getFiltroByReferencia);

// Actualizar un filtro por su referencia
router.put("/:referencia", filtroCtrl.updateFiltro);

// Eliminar un filtro por su referencia
router.delete("/:referencia", filtroCtrl.deleteFiltro);

module.exports = router;