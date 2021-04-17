const Sequelize = require('sequelize');

const Partida = (sequelize)=>{
    sequelize.define('partida',{
        idJuego:{
            type: Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        TiempoPartida:{
            type: Sequelize.STRING(50),
            allowNull: false
        },
        Puntaje:{
            type: Sequelize.STRING(50),
            allowNull: false
        },
        usuario:{
            type: Sequelize.STRING(50),
            allowNull: false
        },
        idNivel:{
            type: Sequelize.INTEGER,
            allowNull: false
        }
    })
};

module.exports= Partida;