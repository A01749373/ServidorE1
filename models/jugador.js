const Sequelize = require('sequelize');

const Jugador = (sequelize) =>{
    sequelize.define('jugador',{
        username:{
            type: Sequelize.STRING(50),
            allowNull: false, 
            primaryKey: true
        },
        correo:{
            type: Sequelize.STRING(250),
            allowNull: false
        },
        password:{
            type: Sequelize.STRING(50),
            allowNull: false,
        },
        nombre:{
            type: Sequelize.STRING(50),
            allowNull: false,
        },
        fechaNacimiento:{
            type: Sequelize.DATEONLY,
            allowNull: false,
        },
        genero:{
            type: Sequelize.STRING(15),
            allowNull: false,
        },
        pais:{
            type: Sequelize.STRING(50),
            allowNull: false,
        },
        nivelEstudios:{
            type: Sequelize.STRING(50),
            allowNull: false,
        },
        carreraInteres:{
            type: Sequelize.STRING(50),
            allowNull: false,
        },
        materiaFavorita:{
            type: Sequelize.STRING(50),
            allowNull: false,
        },
        fechaRegistro:{
            type: Sequelize.DATE,
            allowNull: false,
        }
        /*
        tiempoTotal:{
            type: Sequelize.float, //No estoy segura de que sea float
            allowNulls: false,
        },
        puntajeTotal:{
            type: Sequelize.INTEGER,
            allowNulls: false,
        }*/
    })
}
module.exports = Jugador; 