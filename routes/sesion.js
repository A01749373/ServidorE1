const express = require('express'); 
const sesionController = require('../controllers/sesion');

// Mini app 
const router = express.Router();

//menu principal
router.get('/iniciaSesion', sesionController.getIniciarSesion);
router.post('/iniciaSesion',sesionController.postBuscarUsuario);

router.get('/exito',sesionController.getSesionExitosa);

module.exports = router; 