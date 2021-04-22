//Traer el modelo dentro del objeto de conexion
const Partida = require('../util/database').models.partida;
const Sequelize = require('sequelize');
const sequelize = require('../util/database');

exports.postAgregarPartida = (req,res)=>{
    console.log(req.body.tiempoTotal)
    var tiempo = parseFloat(req.body.tiempoTotal);
    console.log(tiempo);
    console.log(req.body);    
    Partida.create({
        TiempoPartida: tiempo,
        Puntaje: 100000,
        jugadorUsername: req.body.Usuario,
        idNivel: 1
    }).then(resultado=>{
        console.log("Partida Agregada")
        sequelize.query("update [dbo].[jugador] set [tiempoTotal] = (select sum(tiempoPartida) from [dbo].[partida] where jugadorUsername=" + "'" + req.body.Usuario +"'" + ") where username= " + "'"+ req.body.Usuario + "'",{
            type: Sequelize.QueryTypes.UPDATE
        })
      .catch(error=>console.log(error));
      })
      res.send('Partida Agregada')
};