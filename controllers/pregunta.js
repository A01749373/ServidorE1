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
}