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