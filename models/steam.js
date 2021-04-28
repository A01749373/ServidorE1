const Sequelize = require('sequelize');

const Steam = (sequelize) =>{
    sequelize.define('steam',{
        username:{
            type: Sequelize.STRING(50),
            allowNull: false, 
        },
        password:{
            type: Sequelize.STRING(50),
            allowNull: false,
        }
    })
}
module.exports = Steam;    