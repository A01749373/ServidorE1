const Sequelize = require('sequelize');

const Pregunta = (sequelize)=>{
    sequelize.define('pregunta', {
        idPregunta:{
            type:Sequelize.INTEGER,
            allowNull:false,
            primaryKey:true,
            autoIncrement: true,
        },
        categoria:{
            type:Sequelize.STRING,
            allowNull:false
        },
        textoPregunta:{
            type:Sequelize.STRING,
            allowNull:false
        },
        respuesta:{
            type:Sequelize.STRING,
            allowNull:false
        },
        opcion1:{
            type:Sequelize.STRING,
            allowNull:false
        },
        opcion2:{
            type:Sequelize.STRING,
            allowNull:false
        },
        opcion3:{
            type:Sequelize.STRING,
            allowNull:false
        },
        opcion4:{
            type:Sequelize.STRING,
            allowNull:false
        }
    })
};

module.exports = Pregunta;