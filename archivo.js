'use strict'

// Hacer una pregunta y mostrar 3 respuestas posibles

var pregunta1 = {
	"numeropregunta": 1,
	"pregunta": "¿A qué género pertenece la araña de rincón?",
	"respuesta1": "latrodectus",
	"respuesta2": "loxosceles",
	"respuesta3": "phoneutria",
	"respuestaok": 2
}
const check = (respuesta) => {
    if(respuesta == pregunta1.respuestaok){
        return alert("Respuesta correcta");
    }else{
        return alert("Respuesta incorrecta");
    }
}