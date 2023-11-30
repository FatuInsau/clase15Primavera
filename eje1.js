// estaEnRango(valor, minimo, maximo)
// Crear una función estaEnRango que tome como argumentos tres números, un valor, un número minimo y un número maximo, y devuelva true si el valor se encuentra entre los números minimo y maximo o false si no (si el valor es igual a uno de los extremos se considera que está dentro del rango)

function estaEnRango(valor, minimo, maximo) {

    // valor sea mayor a minimo
    // y
    // valor sea menor que maximo

    if (valor>=minimo && valor<=maximo) {
        return true;
    } else {
        return false;
    }

};




console.log(estaEnRango(3, 1, 10))   // true
console.log(estaEnRango(1, 1, 10) )  // true
console.log(estaEnRango(10, 1, 10) ) // true
console.log(estaEnRango(12, 1, 10)  )// false
console.log(estaEnRango(-3, 1, 10) ) // false