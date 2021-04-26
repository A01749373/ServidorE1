const express = require('express');
const router = express.Router();
const preguntaController = require('../controllers/pregunta');

router.post('/agregarPregunta', preguntaController.postAgregarPregunta);

// Preguntas Nivel 1

router.get('/buscarPreguntaNivel1', preguntaController.getObtenerPreguntaNivel1); 

// Preguntas Nivel 2

router.get('/buscarPreguntaNivel2', preguntaController.getObtenerPreguntaNivel2); 

// Preguntas Nivel 3

router.get('/buscarPreguntaNivel3', preguntaController.getObtenerPreguntaNivel3); 

// Preguntas Nivel 4

router.get('/buscarPreguntaNivel4', preguntaController.getObtenerPreguntaNivel4); 

// Preguntas Nivel 5

router.get('/buscarPreguntaNivel5', preguntaController.getObtenerPreguntaNivel5); 

module.exports = router; 