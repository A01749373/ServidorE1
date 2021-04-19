//Función que recibe el objeto de conexión
function applyRelations(sequelize){
    console.log(sequelize.models);
    const Jugador = sequelize.models.jugador;
    const Pregunta = sequelize.models.pregunta;
    const PreguntaContestada = sequelize.models.preguntaContestada;
    const Nivel = sequelize.models.nivel;
    const Partida = sequelize.models.partida;

    
    //Relación Jugador - PreguntaContestada
    //Un jugador puede tener muchas preguntas contestadas
    Jugador.hasMany(PreguntaContestada);
    //Una pregunta contestada solo puede ser contestada por un jugador
    PreguntaContestada.belongsTo(Jugador);
    

    //Relación Nivel - Pregunta
    //Un nivel puede tener muchas preguntas
    Nivel.hasMany(Pregunta);
    //Una pregunta solo puede ser asignada a un nivel
    Pregunta.belongsTo(Nivel);

    //Relación PreguntaContestada - Pregunta
    //Una pregunta contestada registra muchas preguntas
    Pregunta.hasMany(PreguntaContestada);
    //Una pregunta solo puede ser asignada a una pregutna contestada
    PreguntaContestada.belongsTo(Pregunta);

    //Relación Jugador - Partida
    //Un jugador puede tener muchas partidas
    Jugador.hasMany(Partida);
    //Una partida solo puede ser de un jugador
    Partida.belongsTo(Jugador);

    //Relación Nivel - Partida
    //Un nivel puede tener muchas partidas
    Nivel.hasMany(Partida);
    //Una partida solo puede ser asignada a un nivel
    Partida.belongsTo(Nivel);

}

module.exports = {applyRelations};
