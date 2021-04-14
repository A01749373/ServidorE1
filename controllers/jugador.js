// Modelo asociado a la tabla jugador 
const Jugador = require('../models/jugador'); 
const path = require('path'); 

exports.getAgregarJugador = (req, res)=>{
    res.sendFile(path.join(__dirname, '..', 'views', 'formularioJugador.html')); 
};  

exports.postAgregarJugador = (req, res)=>{
    console.log(req.body);
    let now = new Date();
    let date = ("0" + now.getDate()).slice(-2);
    let month = ("0" + (now.getMonth() + 1)).slice(-2);
    let year = now.getFullYear();

 
    Jugador.create({
        username:req.body.Username, 
        password:req.body.password,
        nombre:req.body.nombreUsuario,
        fechaNacimiento:req.body.FechaNacimiento,
        genero: req.body.genero,
        pais: req.body.pais,
        nivelEstudios: req.body.nivel,
        carreraInteres: req.body.Carrera,
        materiaFavorita: req.body.materia,
        fechaRegistro: year + "-" + month + "-" + date
    }).then(resultado=>console.log("Registro exitoso"))
      .catch(error=>console.log(error)); 
      
    res.redirect("/jugador/confirmacion");  
};

exports.getConfirmacion = (req,res)=>{
    //res.send("Registro exitoso");
    res.sendFile(path.join(__dirname, '..', 'views', 'confirmacion.html')); 
};
 
exports.getRegistros = (req,res)=>{
    //Simular consulta
    Jugador.findAll()
        .then(registros=>{
            var data=[];
            registros.forEach(registro=>{
                data.push(registro.dataValues);
            });
            console.log(data);
            res.render('jugadorEJS.html',{
                jugadores:data
            });
        })   
};

exports.getRegistro = (req,res) =>{
    console.log(req.params);
    Jugador.findByPk(req.params.usuario)
        .then(resultado=>{
            res.send(resultado);
        })
        .catch(error=>{
            console.log(error);
            res.send(error);
        })
} 