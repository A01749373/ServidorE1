//Traer el modelo dentro del objeto de conexion
const Nivel = require('../util/database').models.nivel;

exports.postAgregarNivel = (req,res)=>{
    console.log(req.body);
    Nivel.create(req.body)
        .then(resultado =>{ 
            console.log("Registro exitoso");
            res.send("Registro exitoso");
    })
        .catch(error => {
            console.log(error);
            res.send("Hubo un problema");
        })
}