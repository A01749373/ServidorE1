const express = require('express');
const router = express.Router();
const partidaController = require('../controllers/partida');

router.post('/agregarPartida', partidaController.postAgregarPartida);

module.exports = router;