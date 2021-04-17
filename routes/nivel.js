const express = require('express');
const router = express.Router();
const nivelController = require('../controllers/nivel');

router.post('/agregarNivel', nivelController.postAgregarNivel);

module.exports = router;