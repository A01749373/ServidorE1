const express = require('express'); 
const jugadorController = require('../controllers/jugador');

// Mini app 
const router = express.Router(); 

// Create 
// Mostrar el formulario 
router.get('/agregarJugador', jugadorController.getAgregarJugador); 

// Obtener los datos del formulario 
router.post('/agregarJugador', jugadorController.postAgregarJugador); 

//Mostrar al usuario el resultado de la transaccion
router.get('/confirmacion', jugadorController.getConfirmacion);

//READ
//Mostrar los registros de la base de datos
router.get('/registros', jugadorController.getRegistros);

module.exports = router; 