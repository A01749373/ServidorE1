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
            type: Sequelize.FLOAT,
            allowNull: false
        },
        Puntaje:{
            type: Sequelize.INTEGER,
            allowNull: false
        }
    })
};

module.exports= Partida;