//Traer el modelo dentro del objeto de conexión
const PreguntaContestada = require('../util/database').models.preguntaContestada;

/*exports.postAgregarPreguntaContestada =(req,res)=>{
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
}*/

exports.postAgregarPreguntaContestada = (req,res)=>{
    console.log(req.body);
    PreguntaContestada.create({
        opcionContestada: req.body.opcionContestada,
        estado: req.body.estado,
        jugadorUsername: req.body.jugadorUsername,
        preguntumIdPregunta: req.body.preguntumIdPregunta,
    }).then(resultado=>console.log(resultado))
    .catch(error=>console.log(error)); 

    res.send("")  
 }; 