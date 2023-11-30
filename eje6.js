// 💲Cara o cruz
// Crear un programa que permita escoger entre cara o cruz. El programa luego debe generar un resultado aleatorio y mostrar si se acertó o no. 
// El programa debe mostrar en cada vuelta cuántas rondas seguidas acertadas van, y si en algún momento se erra, reiniciar el contador a 0. 
// También debe llevar una cuenta de la cantidad máxima de rondas seguidas que se hizo sin errar. 
// Cuando se ingresa la palabra SALIR, en vez de CARA o CRUZ, el programa debe mostrar la cantidad máxima de rondas seguidas acertadas junto a un mensaje de despedida, y terminar su ejecución.

// var max = 1;
// var min = 0;
// var caraOCruz = Math.floor(Math.random() * (max - min + 1) + min);


// 1 --> Cara
// 0 --> Cruz

// 0.23*100=23


// Math.random() --> 0,1 - 0,999999


var respuestaUsuario = '';
var resultadoCompu;
var cantDeVictoriasSeguidas=0;
var maxDeVictoriasSeguidas=0;

// el buble se detiene cuando el usuario ponga SALIR
while (respuestaUsuario!=='SALIR') {
    // CADA RONDA

// pedir cara o cruz
    respuestaUsuario = prompt("Ingrese CARA o CRUZ");

// compu tira moneda (math.random)
    resultadoCompu = Math.floor(Math.random() * (1 - 0 + 1) + 0);
    // 1 --> Cara
    // 0 --> Cruz

    // ver si usuario le acerto
    if((respuestaUsuario==="CARA" && resultadoCompu===1) || (respuestaUsuario==="CRUZ" && resultadoCompu===0)){
        // usuario acerto
        // llevar cuenta que cuantas gano
        // mostrar cuenta de cuanto gano
        cantDeVictoriasSeguidas++;
        alert(`Lleva ${cantDeVictoriasSeguidas} victorias seguidas`);
    } else {
    // si no lo hizo
    // comparar con el maximo de veces ganadas 
    if(cantDeVictoriasSeguidas>maxDeVictoriasSeguidas) {
        maxDeVictoriasSeguidas=cantDeVictoriasSeguidas;
    }
    // cuantas veces gano se vuelve cero
    cantDeVictoriasSeguidas=0
    alert("Usted perdio jeje")
    }

}

// mostrar mensaje de despedida al salir
alert("Muchas gracias por jugar. Su máximo es de " + maxDeVictoriasSeguidas);

