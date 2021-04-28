// Generar conexión con la BD
const Sequelize = require('sequelize');
const {applyRelations} = require('./relations');

const sequelize = new Sequelize('Datablaze', 'sa', 'Password1234$', { // Nombre de la BD, usuario y contraseña para SQL Server
    dialect: 'mssql',
    host: 'localhost', // 'localhost'
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

//Cargar los modelos
const modelDefiners = [
    require('../models/jugador'),
    require('../models/pregunta'),
    require('../models/preguntaContestada'),
    require('../models/nivel'),
    require('../models/partida'),
    require('../models/steam')
];

//Vincular el objeto de conexión con los modelos
for(const modelDefiner of modelDefiners){
    modelDefiner(sequelize);
}

//Construir las relaciones
applyRelations(sequelize);

// Exportando el objeto sequelize 
module.exports = sequelize;     