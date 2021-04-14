const Sequelize = require('sequelize');
const sequelize = require('../util/database'); 

// Definición del modelo -> Tabla jugador
const Jugador = sequelize.define('jugador', {
    username:{
        type: Sequelize.STRING(50),
        allowNulls: false, 
        primaryKey: true
    }, 
    password:{
        type: Sequelize.STRING(50),
        allowNulls: false,
    },
    nombre:{
        type: Sequelize.STRING(50),
        allowNulls: false,
    },
    fechaNacimiento:{
        type: Sequelize.DATEONLY,
        allowNulls: false,
    },
    genero:{
        type: Sequelize.STRING(15),
        allowNulls: false,
    },
    pais:{
        type: Sequelize.STRING(50),
        allowNulls: false,
    },
    nivelEstudios:{
        type: Sequelize.STRING(50),
        allowNulls: false,
    },
    carreraInteres:{
        type: Sequelize.STRING(50),
        allowNulls: false,
    },
    materiaFavorita:{
        type: Sequelize.STRING(50),
        allowNulls: false,
    },
    fechaRegistro:{
        type: Sequelize.DATE,
        allowNulls: false,
    }
}); 

module.exports = Jugador; 