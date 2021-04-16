const Sequelize = require('sequelize');

const PreguntaContestada = (sequelize)=>{
    sequelize.define('preguntaContestada', {
        idPregContestada:{
            type:Sequelize.INTEGER,
            allowNull:false,
            primaryKey:true,
            autoIncrement: true,
        },
        username:{
            type:Sequelize.STRING,
            allowNull:false
        },
        idPregunta:{
            type:Sequelize.INTEGER,
            allowNull:false
        },
        opcionContestada:{
            type:Sequelize.STRING,
            allowNull:false
        },
        estado:{
            type:Sequelize.STRING,
            allowNull:false
        }
        
    })
};

module.exports = PreguntaContestada;