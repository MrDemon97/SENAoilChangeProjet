const express = require('express');
const router = express.Router();
const filtroCtrl = require('../controllers/filtroController');

router.post('/', filtroCtrl.createFiltro);
router.get('/', filtroCtrl.getFiltros);
router.get('/:id', filtroCtrl.getFiltroById);
router.put('/:id', filtroCtrl.updateFiltro);
router.delete('/:id', filtroCtrl.deleteFiltro);

module.exports = router;