// Generar conexión con la BD
const Sequelize = require('sequelize');
const sequelize = new Sequelize('datablaze', 'sa', 'Password1234$', { // Nombre de la BD, usuario y contraseña para SQL Server
    dialect: 'mssql',
    host: '192.168.1.64',
    dialectOptions:{
        options:{
            useUTC: false,
            dataFirst: 1
        }        
    },
    define:{
        timestamps: false,
        freezeTableName: true
    }
}); 

// Exportando el objeto sequelize 
module.exports = sequelize;   