const express = require('express');
const router = express.Router();
const filtroCtrl = require('../controllers/filtroController');

// Obtener todos los filtros
router.get('/', filtroCtrl.getFiltros);

/* Buscar un registro en el coincidan todos los componentes de filtro
router.get('/buscar', filtroCtrl.getFiltroBuscado); */

// Crear un nuevo filtro
router.post('/', filtroCtrl.createFiltro);

// Obtener un filtro por su referencia
router.get('/:referencia', filtroCtrl.getFiltroByReferencia);

// Actualizar un filtro por su id
router.put('/:_id', filtroCtrl.updateFiltro);

// Eliminar un filtro por su id
router.delete('/:_id', filtroCtrl.deleteFiltro);

module.exports = router;