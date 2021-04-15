const express = require('express');
const router = express.Router();
const preguntaContestadaController = require('../controllers/preguntaContestada');

router.post('/agregarPreguntaContestada',preguntaContestadaController.postAgregarPreguntaContestada);

module.exports = router;