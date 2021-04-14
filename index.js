//Importación de biblioteca para creación de servidores
const express = require("express")
//Biblioteca para generar rutas de acuerdo al sistema operativo
const path = require("path")
//Biblioteca para definir JSON
const bodyParser = require("body-parser")

// Traer conexión con la BD
const sequelize = require('./util/database'); 

// Traer las rutas 
const jugadorRoutes = require('./routes/jugador'); 

//Creación de servidor 
const app = express();

//Middleware para configurar la definición de un JSON
app.use(bodyParser.json());

//Middleware para configurar la recepción de formularios
app.use(bodyParser.urlencoded({extended:true}))

// Configurar visualización de plantilla 
app.engine('html', require('ejs').renderFile);
//Definir el uso de la carpeta publica
app.use(express.static(__dirname + '/public'));

app.set('view engine', 'ejs'); 

app.use('/jugador', jugadorRoutes); 

let puerto=8080;
// Establece vínculo entre la conexión del servidor y la BD
sequelize.sync()
    .then(resultado=>{
        console.log("Conexión exitosa");
        // Lanza el servidor para escuchar peticiones
        app.listen(puerto, ()=>console.log("Servidor en línea en el puerto 8080")); 
    })
    .catch(error=>console.log(error));     