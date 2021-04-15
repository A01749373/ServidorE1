//Traer el modelo dentro del objeto de conexion
const Partida = require('../util/database').models.partida;

exports.postAgregarPartida = (req,res)=>{
    console.log(req.body);    
    Partida.create({
        TiempoInicio: req.body.TiempoInicio,
        TiempoFinal: req.body.TiempoFinal,
        usuario: req.body.TiempoUsuario,
        idJuego: req.body.idJuego,
        idNivel: req.body.idNivel
    }).then(resultado=>console.log("Partida Agregada"))
      .catch(error=>console.log(error));
      res.send('Partida Agregada')
};