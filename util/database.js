// Generar conexión con la BD
const Sequelize = require('sequelize');
const sequelize = new Sequelize('Datablaze', 'sa', 'Password1234$', { // Nombre de la BD, usuario y contraseña para SQL Server
    dialect: 'mssql',
    host: 'localhost',
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