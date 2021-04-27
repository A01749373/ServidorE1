const express = require('express');
const router = express.Router();
const partidaController = require('../controllers/partida');

router.post('/agregarPartida', partidaController.postAgregarPartida);
router.post('/BuscarNivel', partidaController.postBuscarNivel);

module.exports = router;