const express = require('express');
const router = express.Router();
const preguntaController = require('../controllers/pregunta');

router.post('/agregarPregunta', preguntaController.postAgregarPregunta);

// Preguntas Contestadas Nivel 1

router.get('/buscarPregunta', preguntaController.getObtenerPreguntaNivel1); 

router.get('/buscarOpcion1', preguntaController.getObtenerOpcion1Nivel1); 

router.get('/buscarOpcion2', preguntaController.getObtenerOpcion2Nivel1);

router.get('/buscarOpcion3', preguntaController.getObtenerOpcion3Nivel1);

router.get('/buscarOpcion4', preguntaController.getObtenerOpcion4Nivel1); 

router.get('/buscarRespuestaCorrecta', preguntaController.getObtenerRespuestaCorrectaNivel1);

router.get('/buscarIdPregunta', preguntaController.getObtenerIdPreguntaNivel1);

// Preguntas Contestadas Nivel 2

router.get('/buscarPregunta', preguntaController.getObtenerPreguntaNivel2); 

router.get('/buscarOpcion1', preguntaController.getObtenerOpcion1Nivel2); 

router.get('/buscarOpcion2', preguntaController.getObtenerOpcion2Nivel2);

router.get('/buscarOpcion3', preguntaController.getObtenerOpcion3Nivel2);

router.get('/buscarOpcion4', preguntaController.getObtenerOpcion4Nivel2); 

router.get('/buscarRespuestaCorrecta', preguntaController.getObtenerRespuestaCorrectaNivel2);

router.get('/buscarIdPregunta', preguntaController.getObtenerIdPreguntaNivel2);

// Preguntas Contestadas Nivel 3

router.get('/buscarPregunta', preguntaController.getObtenerPreguntaNivel3); 

router.get('/buscarOpcion1', preguntaController.getObtenerOpcion1Nivel3); 

router.get('/buscarOpcion2', preguntaController.getObtenerOpcion2Nivel3);

router.get('/buscarOpcion3', preguntaController.getObtenerOpcion3Nivel3);

router.get('/buscarOpcion4', preguntaController.getObtenerOpcion4Nivel3); 

router.get('/buscarRespuestaCorrecta', preguntaController.getObtenerRespuestaCorrectaNivel3);

router.get('/buscarIdPregunta', preguntaController.getObtenerIdPreguntaNivel3);

// Preguntas Contestadas Nivel 4

router.get('/buscarPreguntaNivel4', preguntaController.getObtenerPreguntaNivel4); 

router.get('/buscarOpcion1Nivel4', preguntaController.getObtenerOpcion1Nivel4); 

router.get('/buscarOpcion2Nivel4', preguntaController.getObtenerOpcion2Nivel4);

router.get('/buscarOpcion3Nivel4', preguntaController.getObtenerOpcion3Nivel4);

router.get('/buscarOpcion4Nivel4', preguntaController.getObtenerOpcion4Nivel4); 

router.get('/buscarRespuestaCorrectaNivel4', preguntaController.getObtenerRespuestaCorrectaNivel4);

router.get('/buscarIdPreguntaNivel4', preguntaController.getObtenerIdPreguntaNivel4);

// Preguntas Contestadas Nivel 5

router.get('/buscarPregunta', preguntaController.getObtenerPreguntaNivel5); 

router.get('/buscarOpcion1', preguntaController.getObtenerOpcion1Nivel5); 

router.get('/buscarOpcion2', preguntaController.getObtenerOpcion2Nivel5);

router.get('/buscarOpcion3', preguntaController.getObtenerOpcion3Nivel5);

router.get('/buscarOpcion4', preguntaController.getObtenerOpcion4Nivel5); 

router.get('/buscarRespuestaCorrecta', preguntaController.getObtenerRespuestaCorrectaNivel5);

router.get('/buscarIdPregunta', preguntaController.getObtenerIdPreguntaNivel5);

module.exports = router; 