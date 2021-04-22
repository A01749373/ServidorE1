const express = require('express');
const router = express.Router();
const preguntaController = require('../controllers/pregunta');

router.post('/agregarPregunta', preguntaController.postAgregarPregunta);

router.get('/buscarPregunta', preguntaController.getObtenerPregunta); 

router.get('/buscarOpcion1', preguntaController.getObtenerOpcion1); 

router.get('/buscarOpcion2', preguntaController.getObtenerOpcion2);

router.get('/buscarOpcion3', preguntaController.getObtenerOpcion3);

router.get('/buscarOpcion4', preguntaController.getObtenerOpcion4); 

router.get('/buscarRespuestaCorrecta', preguntaController.getObtenerRespuestaCorrecta); 

module.exports = router;