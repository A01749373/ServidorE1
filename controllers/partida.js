//Traer el modelo dentro del objeto de conexion
const Partida = require('../util/database').models.partida;
const Sequelize = require('sequelize');
const sequelize = require('../util/database');

exports.postAgregarPartida = (req,res)=>{
    var tiempo = parseFloat(req.body.tiempoTotal);  
    Partida.create({
        TiempoPartida: tiempo,
        Puntaje: req.body.puntajeTotal,
        jugadorUsername: req.body.Usuario,
        nivelIdNivel: req.body.nivelID
    }).then(resultado=>{
        console.log("Partida Agregada")
        sequelize.query("update [dbo].[jugador] set [tiempoTotal] = (select sum(tiempoPartida) from [dbo].[partida] where jugadorUsername=" + "'" + req.body.Usuario +"'" + ") where username= " + "'"+ req.body.Usuario + "'",{
            type: Sequelize.QueryTypes.UPDATE
        })
        sequelize.query("update [dbo].[jugador] set  [puntajeTotal] = (select sum([Puntaje]) from [dbo].[partida] where jugadorUsername=" + "'" + req.body.Usuario +"'" + ") where username= " + "'"+ req.body.Usuario + "'",{
            type: Sequelize.QueryTypes.UPDATE
        })
      .catch(error=>console.log(error));
      })
      res.send('Partida Agregada')
};

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

exports.postBuscarNivel= (req,res)=>{
    //console.log(req.body)
    sequelize.query("select max([nivelIdNivel]) as nivel from [dbo].[partida] where [jugadorUsername] =" + "'" + req.body.usuarioUsuarioo +"'",{
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