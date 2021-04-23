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

// Número aleatorio para las preguntas 
var n = 1; 

exports.getObtenerPregunta = (req, res)=>{
    console.log(req.body);  
    Pregunta.findAll({ 
        attributes: ['textoPregunta'],
        where: {
            idPregunta: n 
        }
    }).then(preguntas=>{
        preguntas.forEach(pregunta=>{
            console.log(pregunta.dataValues.textoPregunta); 
            res.send(pregunta.dataValues.textoPregunta); 
        }); 
        //res.send("Búsqueda exitosa")
    }).catch(error=>console.log(error)) 
}; 

exports.getObtenerOpcion1 = (req, res)=>{
    console.log(req.body); 
    Pregunta.findAll({
        attributes: ['opcion1'],
        where: {
            idPregunta: n
        }
    }).then(opciones=>{
        opciones.forEach(opcion=>{
            console.log(opcion.dataValues.opcion1); 
            res.send(opcion.dataValues.opcion1); 
        }); 
    }).catch(error=>console.log(error)) 
}; 

exports.getObtenerOpcion2 = (req, res)=>{
    console.log(req.body); 
    Pregunta.findAll({
        attributes: ['opcion2'],
        where: {
            idPregunta: n
        }
    }).then(opciones=>{
        opciones.forEach(opcion=>{
            console.log(opcion.dataValues.opcion2); 
            res.send(opcion.dataValues.opcion2); 
        }); 
    }).catch(error=>console.log(error)) 
}; 

exports.getObtenerOpcion3 = (req, res)=>{
    console.log(req.body); 
    Pregunta.findAll({
        attributes: ['opcion3'],
        where: {
            idPregunta: n
        }
    }).then(opciones=>{
        opciones.forEach(opcion=>{
            console.log(opcion.dataValues.opcion3); 
            res.send(opcion.dataValues.opcion3); 
        }); 
    }).catch(error=>console.log(error)) 
}; 

exports.getObtenerOpcion4 = (req, res)=>{
    console.log(req.body); 
    Pregunta.findAll({
        attributes: ['opcion4'],
        where: {
            idPregunta: n
        }
    }).then(opciones=>{
        opciones.forEach(opcion=>{
            console.log(opcion.dataValues.opcion4); 
            res.send(opcion.dataValues.opcion4); 
        }); 
    }).catch(error=>console.log(error)) 
}; 

exports.getObtenerRespuestaCorrecta = (req, res)=>{
    console.log(req.body); 
    Pregunta.findAll({
        attributes: ['respuesta'],
        where: {
            idPregunta: n
        }
    }).then(respuestas=>{
        respuestas.forEach(respuesta=>{
            console.log(respuesta.dataValues.respuesta); 
            res.send(respuesta.dataValues.respuesta); 
        }); 
    }).catch(error=>console.log(error)) 
};  


/*-------------------------------------------------------*/
exports.getObtenerIdPregunta = (req, res)=>{
    console.log(req.body);  
    Pregunta.findAll({ 
        attributes: ['idPregunta'],
        where: {
            idPregunta: n 
        }
    }).then(id=>{
        id.forEach(idPregunta=>{
            console.log(idPregunta.dataValues.idPregunta); 
            res.send(idPregunta.dataValues.idPregunta); 
        }); 
        //res.send("Búsqueda exitosa")
    }).catch(error=>console.log(error)) 
}; 