const express = require('express'); 
const jugadorController = require('../controllers/jugador');

// Mini app 
const router = express.Router(); 

// Create 
// Mostrar el formulario 
router.get('/agregarJugador', jugadorController.getAgregarJugador); 

//Agregar Registro desde Unity
router.post('/agregarJugadorUnity', jugadorController.postAgregarJugadorUnity); 

// Obtener los datos del formulario 
router.post('/agregarJugador', jugadorController.postAgregarJugador); 

//Mostrar al usuario el resultado de la transaccion
router.get('/confirmacion', jugadorController.getConfirmacion);

//READ
//Mostrar los registros de la base de datos
router.get('/registros', jugadorController.getRegistros);

router.get('/estadisticas', jugadorController.getEstadisticas);

//Busca el jugador para poder iniciar sesión
router.post('/BuscarJugador',jugadorController.postBuscarJugador);

//Busca el jugador para poder crear registro
router.post('/BuscarJugadorUnity',jugadorController.postBuscarJugadorUnity);
router.post('/BuscarNivel', jugadorController.postBuscarNivel);
router.post('/ActualizarNivel', jugadorController.postActualizarNivel);

module.exports = router; 