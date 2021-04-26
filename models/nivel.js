const Sequelize = require('sequelize');

const Nivel = (sequelize)=>{
    sequelize.define('nivel',{
        idNivel:{
            type: Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true,
            //autoIncrement: true
        },
        Nombre:{
            type: Sequelize.STRING(50),
            allowNull: false
        },
    })
};

module.exports= Nivel;