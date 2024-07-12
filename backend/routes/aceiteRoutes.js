const express = require('express');
const router = express.Router();
const aceiteCtrl = require('../controllers/aceiteController');

router.post('/', aceiteCtrl.createAceite);
router.get('/', aceiteCtrl.getAceites);
router.get('/:id', aceiteCtrl.getAceiteById);
router.put('/:id', aceiteCtrl.updateAceite);
router.delete('/:id', aceiteCtrl.deleteAceite);

module.exports = router;