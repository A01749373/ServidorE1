const bodyParser = require("body-parser");
const path = require("path")
const express = require('express');
const sequelize = require('./util/database') 

const app=express()

app.use(express.static(path.join(__dirname,"public"))); 
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended:true}));


const jugadorRoutes = require('./routes/jugador')
const preguntaRoutes = require("./routes/pregunta");
const preguntaContestadaRoutes = require("./routes/preguntaContestada");
const nivelRoutes = require("./routes/nivel");
const partidaRoutes = require("./routes/partida");
const menuRoutes = require("./routes/menu");
const sesionRoutes = require("./routes/sesion");
const steamRoutes = require("./routes/steam"); 

app.use('/jugador', jugadorRoutes);
app.use('/pregunta',preguntaRoutes);
app.use('/preguntaContestada',preguntaContestadaRoutes);
app.use('/nivel',nivelRoutes);
app.use('/partida',partidaRoutes);
app.use('/menu',menuRoutes);
app.use('/Sesion',sesionRoutes);
app.use('/steam', steamRoutes);

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs'); 


let puerto=8080;
// Establece vínculo entre la conexión del servidor y la BD
sequelize.sync({force:false})
    .then(resultado=>{
        console.log("Conexión exitosa");
        // Lanza el servidor para escuchar peticiones
        app.listen(puerto, ()=>console.log("Servidor en línea en el puerto 8080")); 
    })
    .catch(error=>console.log(error));       