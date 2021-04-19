// Modelo asociado a la tabla jugador 
const path = require('path');
const sequelize = require('../util/database');


exports.getPaginaPrincipal = (req, res)=>{
    res.sendFile(path.join(__dirname, '..', 'views', 'principal.html')); 
};  