const express = require('express');
const router = express.Router();
const nivelController = require('../controllers/nivel');

router.post('/agregarNivel', alumnoController.postAgregarNivel);

module.exports = router;