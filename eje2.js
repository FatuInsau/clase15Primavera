// obtenerGeneracion(anioNacimiento)
// Crear una función obtenerGeneracion que tome como argumento un número anioNacimiento y devuelva un string con la generación a la que pertenece, siguientdo estas reglas:

function obtenerGeneracion (anioNacimiento) {
    switch (true) {
        case anioNacimiento>=1949 && anioNacimiento<=1968:
            return "Baby boomer";
        case anioNacimiento>=1969 && anioNacimiento<=1980:
            return "Generación X";
        case anioNacimiento>=1981 && anioNacimiento<=1993:
            return "Millennials";
        case anioNacimiento>=1994 && anioNacimiento<=2010:
            return "Generación Z";
        default:
            return "Error: No se detecto bien el año"
    }
};

console.log(obtenerGeneracion("hola"))

// Generación	Años de nacimiento
// Baby boomer	1949-1968
// Generación X	1969-1980
// Millennials	1981-1993
// Generación Z	1994-2010