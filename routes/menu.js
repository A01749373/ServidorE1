const express = require('express'); 
const menuController = require('../controllers/menu');

// Mini app 
const router = express.Router();

//menu principal
router.get('/principal', menuController.getPaginaPrincipal);

module.exports = router; 