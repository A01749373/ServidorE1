const express = require('express');
const router = express.Router();
const preguntaController = require('../controllers/pregunta');

router.post('/agregarPregunta',preguntaController.postAgregarPregunta);

module.exports = router;