//Traer el modelo dentro del objeto de conexión
const Pregunta = require('../util/database').models.pregunta;

exports.postAgregarPregunta =(req,res)=>{
    console.log(req.body);
    Pregunta.create(req.body)
        .then(resultado=>{
            console.log("Registro exitoso");
            res.send("Registro exitoso");
        }) 
        .catch(error=>{
            console.log(error);
            res.send("Hubo un problema");
        })
};

// Numero aleatorio para las preguntas 
//var n = Math.floor(Math.random()*9)+1; // Math.floor(Math.random()*(Y-X))+X
var n1 =1;
var n2 = 1;
var n3 = 1;
var n4 = 1;
var n5 = 1;

// Preguntas Nivel 1

exports.getObtenerPreguntaNivel1 = (req, res)=>{
    n1 = Math.floor(Math.random()*9)+1;
    console.log(req.body);  
    Pregunta.findAll({ 
        attributes: ['textoPregunta', 'categoria', 'opcion1', 'opcion2', 'opcion3', 'opcion4', 'respuesta', 'idPregunta', 'textoPista'],
        where: {
            idPregunta: n1,
            nivelIdNivel: 1
        } 
    }).then(preguntas=>{
        preguntas.forEach(pregunta=>{ 
            console.log(pregunta.dataValues.textoPregunta+"&"+pregunta.dataValues.opcion1+"&"+pregunta.dataValues.opcion2+"&"+pregunta.dataValues.opcion3+"&"+pregunta.dataValues.opcion4);  
            res.send(pregunta.dataValues.textoPregunta+"&"+pregunta.dataValues.opcion1+"&"+pregunta.dataValues.opcion2+"&"+pregunta.dataValues.opcion3+"&"+pregunta.dataValues.opcion4+"&"+pregunta.dataValues.respuesta+"&"+pregunta.dataValues.idPregunta+"&"+pregunta.dataValues.categoria+"&"+pregunta.dataValues.textoPista); 
        }); 
    }).catch(error=>console.log(error)) 
};

// Preguntas Nivel 2

exports.getObtenerPreguntaNivel2 = (req, res)=>{
    n2 = Math.floor(Math.random()*9)+11;
    console.log(req.body);  
    Pregunta.findAll({ 
        attributes: ['textoPregunta', 'categoria', 'opcion1', 'opcion2', 'opcion3', 'opcion4', 'respuesta', 'idPregunta', 'textoPista'],
        where: {
            idPregunta: n2,
            nivelIdNivel: 2
        } 
    }).then(preguntas=>{
        preguntas.forEach(pregunta=>{ 
            console.log(pregunta.dataValues.textoPregunta+"&"+pregunta.dataValues.opcion1+"&"+pregunta.dataValues.opcion2+"&"+pregunta.dataValues.opcion3+"&"+pregunta.dataValues.opcion4); 
            res.send(pregunta.dataValues.textoPregunta+"&"+pregunta.dataValues.opcion1+"&"+pregunta.dataValues.opcion2+"&"+pregunta.dataValues.opcion3+"&"+pregunta.dataValues.opcion4+"&"+pregunta.dataValues.respuesta+"&"+pregunta.dataValues.idPregunta+"&"+pregunta.dataValues.categoria+"&"+pregunta.dataValues.textoPista);
        }); 
    }).catch(error=>console.log(error)) 
};
   
// Preguntas Nivel 3

exports.getObtenerPreguntaNivel3 = (req, res)=>{
    n3 = Math.floor(Math.random()*9)+21;
    console.log(req.body);  
    Pregunta.findAll({ 
        attributes: ['textoPregunta', 'categoria', 'opcion1', 'opcion2', 'opcion3', 'opcion4', 'respuesta', 'idPregunta', 'textoPista'],
        where: {
            idPregunta: n3,
            nivelIdNivel: 3
        } 
    }).then(preguntas=>{
        preguntas.forEach(pregunta=>{ 
            console.log(pregunta.dataValues.textoPregunta+"&"+pregunta.dataValues.opcion1+"&"+pregunta.dataValues.opcion2+"&"+pregunta.dataValues.opcion3+"&"+pregunta.dataValues.opcion4); 
            res.send(pregunta.dataValues.textoPregunta+"&"+pregunta.dataValues.opcion1+"&"+pregunta.dataValues.opcion2+"&"+pregunta.dataValues.opcion3+"&"+pregunta.dataValues.opcion4+"&"+pregunta.dataValues.respuesta+"&"+pregunta.dataValues.idPregunta+"&"+pregunta.dataValues.categoria+"&"+pregunta.dataValues.textoPista);
        }); 
    }).catch(error=>console.log(error)) 
};

// Preguntas Nivel 4

exports.getObtenerPreguntaNivel4 = (req, res)=>{
    n4 = Math.floor(Math.random()*9)+31;
    console.log(req.body);  
    Pregunta.findAll({ 
        attributes: ['textoPregunta', 'categoria', 'opcion1', 'opcion2', 'opcion3', 'opcion4', 'respuesta', 'idPregunta', 'textoPista'],
        where: {
            idPregunta: n4,
            nivelIdNivel: 4
        } 
    }).then(preguntas=>{
        preguntas.forEach(pregunta=>{ 
            console.log(pregunta.dataValues.textoPregunta+"&"+pregunta.dataValues.opcion1+"&"+pregunta.dataValues.opcion2+"&"+pregunta.dataValues.opcion3+"&"+pregunta.dataValues.opcion4); 
            res.send(pregunta.dataValues.textoPregunta+"&"+pregunta.dataValues.opcion1+"&"+pregunta.dataValues.opcion2+"&"+pregunta.dataValues.opcion3+"&"+pregunta.dataValues.opcion4+"&"+pregunta.dataValues.respuesta+"&"+pregunta.dataValues.idPregunta+"&"+pregunta.dataValues.categoria+"&"+pregunta.dataValues.textoPista);
        });
    }).catch(error=>console.log(error)) 
};

// Preguntas Nivel 5

exports.getObtenerPreguntaNivel5 = (req, res)=>{
    n5 = Math.floor(Math.random()*9)+41;
    console.log(req.body);  
    Pregunta.findAll({ 
        attributes: ['textoPregunta', 'categoria', 'opcion1', 'opcion2', 'opcion3', 'opcion4', 'respuesta', 'idPregunta', 'textoPista'],
        where: {
            idPregunta: n5,
            nivelIdNivel: 5
        } 
    }).then(preguntas=>{
        preguntas.forEach(pregunta=>{ 
            console.log(pregunta.dataValues.textoPregunta+"&"+pregunta.dataValues.opcion1+"&"+pregunta.dataValues.opcion2+"&"+pregunta.dataValues.opcion3+"&"+pregunta.dataValues.opcion4); 
            res.send(pregunta.dataValues.textoPregunta+"&"+pregunta.dataValues.opcion1+"&"+pregunta.dataValues.opcion2+"&"+pregunta.dataValues.opcion3+"&"+pregunta.dataValues.opcion4+"&"+pregunta.dataValues.respuesta+"&"+pregunta.dataValues.idPregunta+"&"+pregunta.dataValues.categoria+"&"+pregunta.dataValues.textoPista);
        });
    }).catch(error=>console.log(error)) 
};

