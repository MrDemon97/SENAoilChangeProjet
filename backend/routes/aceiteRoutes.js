const express = require('express');
const router = express.Router();
const aceiteCtrl = require('../controllers/aceiteController');

//Rutas para aceites
router.get('/', aceiteCtrl.getAceites);
router.get('/buscar', aceiteCtrl.getAceiteBuscado);
router.post('/', aceiteCtrl.createAceite);
router.put('/:_id', aceiteCtrl.updateAceite);
router.delete('/:_id', aceiteCtrl.deleteAceite);


module.exports = router;
