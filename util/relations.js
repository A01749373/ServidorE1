//Función que recibe el objeto de conexión
function applyRelations(sequelize){
    console.log(sequelize.models);
    const Jugador = sequelize.models.jugador;
    const Pregunta = sequelize.models.pregunta;
    const PreguntaContestada = sequelize.models.preguntaContestada;

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
    PreguntaContestada.hasMany(Pregunta);
    //Una pregunta solo puede ser asignada a una pregutna contestada
    Pregunta.belongsTo(PreguntaContestada);

}

module.exports = {applyRelations};