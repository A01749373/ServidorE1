// Modelo asociado a la tabla jugador 
const Jugador = require('../util/database').models.jugador; 
const path = require('path');
const sequelize = require('../util/database');
const Sequelize = require('sequelize');

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
        correo:req.body.CorreoElectronico,
        password:req.body.password,
        nombre:req.body.nombreUsuario,
        fechaNacimiento:req.body.FechaNacimiento,
        genero: req.body.genero,
        pais: req.body.pais,
        nivelEstudios: req.body.nivel,
        carreraInteres: req.body.Carrera,
        materiaFavorita: req.body.materia,
        fechaRegistro: year + "-" + month + "-" + date
    }).then(resultado=>{
        console.log("Registro exitoso")
    res.redirect("/jugador/confirmacion")
    })
    .catch(error=>{
        console.log(error)
        res.send("Nombre de usuario ya existente");
    }); 
};

exports.postAgregarJugadorUnity = (req, res)=>{
    console.log(req.body);
    let now = new Date();
    let date = ("0" + now.getDate()).slice(-2);
    let month = ("0" + (now.getMonth() + 1)).slice(-2);
    let year = now.getFullYear();

 
    Jugador.create({
        username:req.body.Username,
        correo:req.body.CorreoElectronico,
        password:req.body.password,
        nombre:req.body.nombreUsuario,
        fechaNacimiento:req.body.FechaNacimiento,
        genero: req.body.genero,
        pais: req.body.pais,
        nivelEstudios: req.body.nivel,
        carreraInteres: req.body.Carrera,
        materiaFavorita: req.body.materia,
        fechaRegistro: year + "-" + month + "-" + date,
        nivel: 1
    }).then(resultado=>console.log("Registro exitoso"))
      .catch(error=>console.log(error)); 

      res.send("")
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


exports.getEstadisticas = (req,res)=>{
    //Simular consulta
    Jugador.findAll()
        .then(registros=>{
            var data=[];
            registros.forEach(registro=>{
                data.push(registro.dataValues);
            });
            console.log(data);
            res.render('estadisticas.html',{
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

exports.postBuscarJugador= (req,res)=>{
    console.log(req.body)
    Jugador.findAll({
    where: {
        username: req.body.usuarioUsuarioo,
        password: req.body.passwordUsuarioo
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
            res.send('Usuario o contraseña incorrecto')
        }else{
            res.send('')
        }
    }).catch(error => console.log(error))
};

exports.postBuscarJugadorUnity= (req,res)=>{
    console.log(req.body)
    Jugador.findAll({
    where: {
        username: req.body.usuarioUsuarioo,
      }
    })
    .then(registros=>{
        var data=[];
        registros.forEach(registro=>{
            data.push(registro.dataValues);
        });
        console.log(data)
        if (registros.length == 0){
            res.send('')
        }else{
            res.send('Usuario ya existente')
        }
    }).catch(error => console.log(error))
};

exports.postActualizarNivel = (req,res)=>{ 
    nivel = parseInt(req.body.nivel);
    sequelize.query("update [dbo].[jugador] set [nivel] =" + "'" + nivel + "'" + "where [username] =" + "'" + req.body.Usuario +"'",{
        type: Sequelize.QueryTypes.UPDATE
    })
    .then(resultado=>{
        console.log("Partida Agregada")
      .catch(error=>console.log(error));
      })
      res.send('Nivel Actualizado')
};

exports.postBuscarNivel= (req,res)=>{
    //console.log(req.body)
    sequelize.query("select [nivel] as nivel from [dbo].[jugador] where [username] = " + "'" + req.body.Usuario +"'",{
        type: Sequelize.QueryTypes.SELECT
    })
    .then(registros=>{
        var data = [];
        registros.forEach(registro=>{
            data.push(registro);
        })
    //console.log((String(data[0].nivel)));
    res.send(String(data[0].nivel))
    }).catch(error => console.log(error))
};
