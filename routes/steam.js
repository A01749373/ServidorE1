const express = require('express'); 
const usuarioSteamController = require('../controllers/steam');

// Mini app 
const router = express.Router();

//menu principal
router.get('/iniciaSesionSTEAM', usuarioSteamController.getIniciarSesionSteam);
router.post('/iniciaSesionSTEAM', usuarioSteamController.postBuscarUsuarioSteam);

router.get('/sesionSteam',usuarioSteamController.getSesionExitosaSteam);
router.get('/estadisticasSTEAM', usuarioSteamController.getEstadisticasSteam); 

module.exports = router;  