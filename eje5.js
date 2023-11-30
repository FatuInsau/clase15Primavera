// ❗️ Factorial
// Crear un programa que pida ingresar un número, y muestre su factorial. Este se calcula multiplicando el mismo número y todos los números que le anteceden hasta el 1. Por ejemplo: 4 ⇒ 4 _ 3 _ 2 * 1 = 24

// pedir numero
var numero = prompt("Ingrese un numero");
var resultado=1;

// undefined *3 --> Nan

// calcular multiplicacion
for(var i=numero; i>0; i--){
    resultado*= i;
};

alert("El factorial es "+resultado);


