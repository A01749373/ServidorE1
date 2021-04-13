// Modelo asociado a la tabla jugador 
const Jugador = require('../models/jugador'); 
const path = require('path'); 

exports.getAgregarJugador = (req, res)=>{
    res.sendFile(path.join(__dirname, '..', 'views', 'formularioJugador.html')); 
};  

exports.postAgregarJugador = (req, res)=>{
    /*console.log(req.body);
 
    Jugador.create({
        usuario: req.body.usuarioUsuario,
        password: req.body.passwordUsuariod
    }).then(resultado=>console.log("Registro exitoso"))
      .catch(error=>console.log(error)); 

    res.redirect("/usuario/confirmacion");  */
};
