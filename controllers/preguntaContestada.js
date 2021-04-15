//Traer el modelo dentro del objeto de conexión
const PreguntaContestada = require('../util/database').models.preguntaContestada;

exports.postAgregarPreguntaContestada =(req,res)=>{
    console.log(req.body);
    PreguntaContestada.create(req.body)
        .then(resultado=>{
            console.log("Registro exitoso");
            res.send("Registro exitoso");
        })
        .catch(error=>{
            console.log(error);
            res.send("Hubo un problema");
        })
}