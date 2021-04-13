const express = require('express'); 
const jugadorController = require('../controllers/jugador');

// Mini app 
const router = express.Router(); 

// Create 
// Mostrar el formulario 
router.get('/agregarJugador', jugadorController.getAgregarJugador); 

// Obtener los datos del formulario 
router.post('/agregarJugador', jugadorController.postAgregarJugador); 

module.exports = router; 