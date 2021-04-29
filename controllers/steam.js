// Modelo asociado a la tabla usuarioSteam  
const path = require('path');
const Steam = require('../util/database').models.steam; 
const {LocalStorage}= require('node-localstorage');
var localStorage = new LocalStorage('./scratch');


 
exports.getIniciarSesionSteam = (req, res)=>{
    res.sendFile(path.join(__dirname, '..', 'views', 'iniciarSesionSteam.html')); 
};  

exports.postBuscarUsuarioSteam = (req,res)=>{
    Steam.findAll({
    where: {
        password:req.body.password,
        username:req.body.Username
      }
    })
    .then(registros=>{
        //console.log(registros)
        localStorage.setItem('usuario', req.body.Username)
        var data=[];
        registros.forEach(registro=>{
            data.push(registro.dataValues);
        });
        
        console.log(data)
        
        if (registros.length == 0){
            res.redirect('/steam/iniciaSesionSTEAM')
            //Window.alert("Usuario no válido");
        }else{
            
            res.redirect("/steam/sesionSteam")
            
        }
    })
};

exports.getSesionExitosaSteam = (req,res)=>{
    //res.send("Registro exitoso");
    if (localStorage.getItem('usuario') != ""){
        res.render('sesionSteam.html',{
            usuarios: localStorage.getItem('usuario')
        })
    }   
    res.sendFile(path.join(__dirname, '..', 'views', 'sesionSteam.html')); 
}; 

exports.getEstadisticasSteam = (req, res)=>{
    res.sendFile(path.join(__dirname, '..', 'views', 'estadisticasSteam.html')); 
};