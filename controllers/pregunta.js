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
//var n = Math.floor(Math.random()*9)+1; // Math.floor(Math.random()*(Y-X))+X X = 1, Y = 10 
var n1 = 1;
var n2 = 1;
var n3 = 1;
var n4 = 1;
var n5 = 1;
// Preguntas Nivel 1

exports.getObtenerPreguntaNivel1 = (req, res)=>{
    n1 = Math.floor(Math.random()*2)+1;
    console.log(req.body);  
    Pregunta.findAll({ 
        attributes: ['textoPregunta'],
        where: {
            idPregunta: n1 
        } 
    }).then(preguntas=>{
        preguntas.forEach(pregunta=>{
            console.log(pregunta.dataValues.textoPregunta); 
            res.send(pregunta.dataValues.textoPregunta); 
        }); 
        //res.send("Búsqueda exitosa") 
    }).catch(error=>console.log(error)) 
}; 

exports.getObtenerOpcion1Nivel1 = (req, res)=>{
    console.log(req.body); 
    Pregunta.findAll({
        attributes: ['opcion1'],
        where: {
            idPregunta: n1 
        }
    }).then(opciones=>{
        opciones.forEach(opcion=>{
            console.log(opcion.dataValues.opcion1); 
            res.send(opcion.dataValues.opcion1); 
        }); 
    }).catch(error=>console.log(error)) 
}; 

exports.getObtenerOpcion2Nivel1 = (req, res)=>{
    console.log(req.body); 
    Pregunta.findAll({
        attributes: ['opcion2'],
        where: {
            idPregunta: n1
        }
    }).then(opciones=>{
        opciones.forEach(opcion=>{
            console.log(opcion.dataValues.opcion2); 
            res.send(opcion.dataValues.opcion2); 
        }); 
    }).catch(error=>console.log(error)) 
}; 

exports.getObtenerOpcion3Nivel1 = (req, res)=>{
    console.log(req.body); 
    Pregunta.findAll({
        attributes: ['opcion3'],
        where: {
            idPregunta: n1
        }
    }).then(opciones=>{
        opciones.forEach(opcion=>{
            console.log(opcion.dataValues.opcion3); 
            res.send(opcion.dataValues.opcion3); 
        }); 
    }).catch(error=>console.log(error)) 
}; 

exports.getObtenerOpcion4Nivel1 = (req, res)=>{
    console.log(req.body); 
    Pregunta.findAll({
        attributes: ['opcion4'],
        where: {
            idPregunta: n1
        }
    }).then(opciones=>{
        opciones.forEach(opcion=>{
            console.log(opcion.dataValues.opcion4); 
            res.send(opcion.dataValues.opcion4); 
        }); 
    }).catch(error=>console.log(error)) 
}; 

exports.getObtenerRespuestaCorrectaNivel1 = (req, res)=>{
    console.log(req.body); 
    Pregunta.findAll({
        attributes: ['respuesta'],
        where: {
            idPregunta: n1
        }
    }).then(respuestas=>{
        respuestas.forEach(respuesta=>{
            console.log(respuesta.dataValues.respuesta); 
            res.send(respuesta.dataValues.respuesta); 
        }); 
    }).catch(error=>console.log(error)) 
};  

exports.getObtenerIdPreguntaNivel1 = (req, res)=>{
    console.log(n1); 
    res.send(n1.toString()); 
};    

// Preguntas Nivel 2

exports.getObtenerPreguntaNivel2 = (req, res)=>{
    n2 = Math.floor(Math.random()*2)+1;
    console.log(req.body);  
    Pregunta.findAll({ 
        attributes: ['textoPregunta'],
        where: {
            idPregunta: n2 
        } 
    }).then(preguntas=>{
        preguntas.forEach(pregunta=>{
            console.log(pregunta.dataValues.textoPregunta); 
            res.send(pregunta.dataValues.textoPregunta); 
        }); 
        //res.send("Búsqueda exitosa") 
    }).catch(error=>console.log(error)) 
}; 

exports.getObtenerOpcion1Nivel2 = (req, res)=>{
    console.log(req.body); 
    Pregunta.findAll({
        attributes: ['opcion1'],
        where: {
            idPregunta: n2 
        }
    }).then(opciones=>{
        opciones.forEach(opcion=>{
            console.log(opcion.dataValues.opcion1); 
            res.send(opcion.dataValues.opcion1); 
        }); 
    }).catch(error=>console.log(error)) 
}; 

exports.getObtenerOpcion2Nivel2 = (req, res)=>{
    console.log(req.body); 
    Pregunta.findAll({
        attributes: ['opcion2'],
        where: {
            idPregunta: n2
        }
    }).then(opciones=>{
        opciones.forEach(opcion=>{
            console.log(opcion.dataValues.opcion2); 
            res.send(opcion.dataValues.opcion2); 
        }); 
    }).catch(error=>console.log(error)) 
}; 

exports.getObtenerOpcion3Nivel2 = (req, res)=>{
    console.log(req.body); 
    Pregunta.findAll({
        attributes: ['opcion3'],
        where: {
            idPregunta: n2
        }
    }).then(opciones=>{
        opciones.forEach(opcion=>{
            console.log(opcion.dataValues.opcion3); 
            res.send(opcion.dataValues.opcion3); 
        }); 
    }).catch(error=>console.log(error)) 
}; 

exports.getObtenerOpcion4Nivel2 = (req, res)=>{
    console.log(req.body); 
    Pregunta.findAll({
        attributes: ['opcion4'],
        where: {
            idPregunta: n2
        }
    }).then(opciones=>{
        opciones.forEach(opcion=>{
            console.log(opcion.dataValues.opcion4); 
            res.send(opcion.dataValues.opcion4); 
        }); 
    }).catch(error=>console.log(error)) 
}; 

exports.getObtenerRespuestaCorrectaNivel2 = (req, res)=>{
    console.log(req.body); 
    Pregunta.findAll({
        attributes: ['respuesta'],
        where: {
            idPregunta: n2
        }
    }).then(respuestas=>{
        respuestas.forEach(respuesta=>{
            console.log(respuesta.dataValues.respuesta); 
            res.send(respuesta.dataValues.respuesta); 
        }); 
    }).catch(error=>console.log(error)) 
};  

exports.getObtenerIdPreguntaNivel2 = (req, res)=>{
    console.log(n2); 
    res.send(n2.toString()); 
};    

// Preguntas Nivel 3

exports.getObtenerPreguntaNivel3 = (req, res)=>{
    n3 = Math.floor(Math.random()*2)+1;
    console.log(req.body);  
    Pregunta.findAll({ 
        attributes: ['textoPregunta'],
        where: {
            idPregunta: n3
        } 
    }).then(preguntas=>{
        preguntas.forEach(pregunta=>{
            console.log(pregunta.dataValues.textoPregunta); 
            res.send(pregunta.dataValues.textoPregunta); 
        }); 
        //res.send("Búsqueda exitosa") 
    }).catch(error=>console.log(error)) 
}; 

exports.getObtenerOpcion1Nivel3 = (req, res)=>{
    console.log(req.body); 
    Pregunta.findAll({
        attributes: ['opcion1'],
        where: {
            idPregunta: n3
        }
    }).then(opciones=>{
        opciones.forEach(opcion=>{
            console.log(opcion.dataValues.opcion1); 
            res.send(opcion.dataValues.opcion1); 
        }); 
    }).catch(error=>console.log(error)) 
}; 

exports.getObtenerOpcion2Nivel3 = (req, res)=>{
    console.log(req.body); 
    Pregunta.findAll({
        attributes: ['opcion2'],
        where: {
            idPregunta: n3
        }
    }).then(opciones=>{
        opciones.forEach(opcion=>{
            console.log(opcion.dataValues.opcion2); 
            res.send(opcion.dataValues.opcion2); 
        }); 
    }).catch(error=>console.log(error)) 
}; 

exports.getObtenerOpcion3Nivel3 = (req, res)=>{
    console.log(req.body); 
    Pregunta.findAll({
        attributes: ['opcion3'],
        where: {
            idPregunta: n3
        }
    }).then(opciones=>{
        opciones.forEach(opcion=>{
            console.log(opcion.dataValues.opcion3); 
            res.send(opcion.dataValues.opcion3); 
        }); 
    }).catch(error=>console.log(error)) 
}; 

exports.getObtenerOpcion4Nivel3 = (req, res)=>{
    console.log(req.body); 
    Pregunta.findAll({
        attributes: ['opcion4'],
        where: {
            idPregunta: n3
        }
    }).then(opciones=>{
        opciones.forEach(opcion=>{
            console.log(opcion.dataValues.opcion4); 
            res.send(opcion.dataValues.opcion4); 
        }); 
    }).catch(error=>console.log(error)) 
}; 

exports.getObtenerRespuestaCorrectaNivel3 = (req, res)=>{
    console.log(req.body); 
    Pregunta.findAll({
        attributes: ['respuesta'],
        where: {
            idPregunta: n3
        }
    }).then(respuestas=>{
        respuestas.forEach(respuesta=>{
            console.log(respuesta.dataValues.respuesta); 
            res.send(respuesta.dataValues.respuesta); 
        }); 
    }).catch(error=>console.log(error)) 
};  

exports.getObtenerIdPreguntaNivel3 = (req, res)=>{
    console.log(n3); 
    res.send(n3.toString()); 
};  

// Preguntas Nivel 4

exports.getObtenerPreguntaNivel4 = (req, res)=>{
    n4 = Math.floor(Math.random()*2)+1;
    console.log(req.body);  
    Pregunta.findAll({ 
        attributes: ['textoPregunta'],
        where: {
            idPregunta: n4 
        } 
    }).then(preguntas=>{
        preguntas.forEach(pregunta=>{
            console.log(pregunta.dataValues.textoPregunta); 
            res.send(pregunta.dataValues.textoPregunta); 
        }); 
        //res.send("Búsqueda exitosa") 
    }).catch(error=>console.log(error)) 
}; 

exports.getObtenerOpcion1Nivel4 = (req, res)=>{
    console.log(req.body); 
    Pregunta.findAll({
        attributes: ['opcion1'],
        where: {
            idPregunta: n4 
        }
    }).then(opciones=>{
        opciones.forEach(opcion=>{
            console.log(opcion.dataValues.opcion1); 
            res.send(opcion.dataValues.opcion1); 
        }); 
    }).catch(error=>console.log(error)) 
}; 

exports.getObtenerOpcion2Nivel4 = (req, res)=>{
    console.log(req.body); 
    Pregunta.findAll({
        attributes: ['opcion2'],
        where: {
            idPregunta: n4
        }
    }).then(opciones=>{
        opciones.forEach(opcion=>{
            console.log(opcion.dataValues.opcion2); 
            res.send(opcion.dataValues.opcion2); 
        }); 
    }).catch(error=>console.log(error)) 
}; 

exports.getObtenerOpcion3Nivel4 = (req, res)=>{
    console.log(req.body); 
    Pregunta.findAll({
        attributes: ['opcion3'],
        where: {
            idPregunta: n4
        }
    }).then(opciones=>{
        opciones.forEach(opcion=>{
            console.log(opcion.dataValues.opcion3); 
            res.send(opcion.dataValues.opcion3); 
        }); 
    }).catch(error=>console.log(error)) 
}; 

exports.getObtenerOpcion4Nivel4 = (req, res)=>{
    console.log(req.body); 
    Pregunta.findAll({
        attributes: ['opcion4'],
        where: {
            idPregunta: n4
        }
    }).then(opciones=>{
        opciones.forEach(opcion=>{
            console.log(opcion.dataValues.opcion4); 
            res.send(opcion.dataValues.opcion4); 
        }); 
    }).catch(error=>console.log(error)) 
}; 

exports.getObtenerRespuestaCorrectaNivel4 = (req, res)=>{
    console.log(req.body); 
    Pregunta.findAll({
        attributes: ['respuesta'],
        where: {
            idPregunta: n4
        }
    }).then(respuestas=>{
        respuestas.forEach(respuesta=>{
            console.log(respuesta.dataValues.respuesta); 
            res.send(respuesta.dataValues.respuesta); 
        }); 
    }).catch(error=>console.log(error)) 
};  

exports.getObtenerIdPreguntaNivel4 = (req, res)=>{
    console.log(n4); 
    res.send(n4.toString()); 
};  

// Preguntas Nivel 5

exports.getObtenerPreguntaNivel5 = (req, res)=>{
    n5 = Math.floor(Math.random()*2)+1;
    console.log(req.body);  
    Pregunta.findAll({ 
        attributes: ['textoPregunta'],
        where: {
            idPregunta: n5
        } 
    }).then(preguntas=>{
        preguntas.forEach(pregunta=>{
            console.log(pregunta.dataValues.textoPregunta); 
            res.send(pregunta.dataValues.textoPregunta); 
        }); 
        //res.send("Búsqueda exitosa") 
    }).catch(error=>console.log(error)) 
}; 

exports.getObtenerOpcion1Nivel5 = (req, res)=>{
    console.log(req.body); 
    Pregunta.findAll({
        attributes: ['opcion1'],
        where: {
            idPregunta: n5 
        }
    }).then(opciones=>{
        opciones.forEach(opcion=>{
            console.log(opcion.dataValues.opcion1); 
            res.send(opcion.dataValues.opcion1); 
        }); 
    }).catch(error=>console.log(error)) 
}; 

exports.getObtenerOpcion2Nivel5 = (req, res)=>{
    console.log(req.body); 
    Pregunta.findAll({
        attributes: ['opcion2'],
        where: {
            idPregunta: n5
        }
    }).then(opciones=>{
        opciones.forEach(opcion=>{
            console.log(opcion.dataValues.opcion2); 
            res.send(opcion.dataValues.opcion2); 
        }); 
    }).catch(error=>console.log(error)) 
}; 

exports.getObtenerOpcion3Nivel5 = (req, res)=>{
    console.log(req.body); 
    Pregunta.findAll({
        attributes: ['opcion3'],
        where: {
            idPregunta: n5
        }
    }).then(opciones=>{
        opciones.forEach(opcion=>{
            console.log(opcion.dataValues.opcion3); 
            res.send(opcion.dataValues.opcion3); 
        }); 
    }).catch(error=>console.log(error)) 
}; 

exports.getObtenerOpcion4Nivel5 = (req, res)=>{
    console.log(req.body); 
    Pregunta.findAll({
        attributes: ['opcion4'],
        where: {
            idPregunta: n5
        }
    }).then(opciones=>{
        opciones.forEach(opcion=>{
            console.log(opcion.dataValues.opcion4); 
            res.send(opcion.dataValues.opcion4); 
        }); 
    }).catch(error=>console.log(error)) 
}; 

exports.getObtenerRespuestaCorrectaNivel5 = (req, res)=>{
    console.log(req.body); 
    Pregunta.findAll({
        attributes: ['respuesta'],
        where: {
            idPregunta: n5
        }
    }).then(respuestas=>{
        respuestas.forEach(respuesta=>{
            console.log(respuesta.dataValues.respuesta); 
            res.send(respuesta.dataValues.respuesta); 
        }); 
    }).catch(error=>console.log(error)) 
};  

exports.getObtenerIdPreguntaNivel5 = (req, res)=>{
    console.log(n5); 
    res.send(n5.toString());  
};    