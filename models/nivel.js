const Sequelize = require('sequelize');

const Nivel = (sequelize)=>{
    sequelize.define('nivel',{
        idNivel:{
            type: Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        IdArma:{
            type: Sequelize.STRING(50),
            allowNull: false
        },
        Nombre:{
            type: Sequelize.STRING(50),
            allowNull: false
        },
        Enemigo:{
            type: Sequelize.STRING(50),
            allowNull: false
        },
        Amigo:{
            type: Sequelize.STRING(50),
            allowNull: false
        },
        Puntaje:{
            type: Sequelize.INTEGER,
            allowNull: false
        },
    })
};

module.exports= Nivel;