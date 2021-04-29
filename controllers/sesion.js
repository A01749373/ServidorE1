// Modelo asociado a la tabla jugador 
const path = require('path');
const Jugador = require('../util/database').models.jugador;
const {LocalStorage}= require('node-localstorage');
var localStorage = new LocalStorage('./scratch');


exports.getIniciarSesion = (req, res)=>{
    console.log(req.query)

    if (req.query=={}){
        res.render('IniciarSesion.html',{
            error: 0
        })
    }else{
        res.render('IniciarSesion.html',{
            error: req.query.error
        })
    }
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
        localStorage.setItem('usuario', req.body.Username)
        var data=[];
        registros.forEach(registro=>{
        data.push(registro.dataValues);
        });
        
        //console.log(data)
        
        if (registros.length == 0){
            //res.send("Usuario no válido")
            res.redirect('/Sesion/iniciaSesion?error=1')
            //Window.alert("Usuario no válido");
        }else{
            res.redirect("/Sesion/exito") 
            
        }
    })
};

exports.getSesionExitosa = (req,res)=>{
    //res.send("Registro exitoso");
    if (localStorage.getItem('usuario') != ""){
    res.render('sesionExitosa.html',{
        usuarios: localStorage.getItem('usuario')
    })
}   
    res.sendFile(path.join(__dirname, '..', 'views', 'sesionExitosa.html')); 
};