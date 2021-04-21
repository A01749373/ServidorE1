// Modelo asociado a la tabla jugador 
const path = require('path');
const Jugador = require('../util/database').models.jugador;


exports.getIniciarSesion = (req, res)=>{
    res.sendFile(path.join(__dirname, '..', 'views', 'IniciarSesion.html')); 
};  

exports.postBuscarUsuario = (req,res)=>{
    Jugador.findAll({
    where: {
        password:req.body.password,
        username:req.body.Username,
      }
    })
    .then(registros=>{
        //console.log(registros)
        var data=[];
        registros.forEach(registro=>{
            data.push(registro.dataValues);
        });
        console.log(data)
        if (registros.length == 0){
            res.redirect('/Sesion/iniciaSesion')
        }else{
            res.redirect("/Sesion/exito");
        }
    })
};

exports.getSesionExitosa = (req,res)=>{
    //res.send("Registro exitoso");
    res.sendFile(path.join(__dirname, '..', 'views', 'sesionExitosa.html')); 
};