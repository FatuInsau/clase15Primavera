// 🔐 Múltiples intentos
// Crear un programa que pida ingresar usuario y contraseña. El programa debe permitir hasta 3 intentos, cuando el usuario y/o la contraseña sean incorrectos. Si se ingresa correctamente ambos antes de 3 intentos erróneos, debe mostrar un mensaje de bienvenida. Si se ingresan 3 intentos erróneos, debe mostrar un mensaje de error y terminar el programa. El usuario y la contraseña ya deben estar guardadas en variables.

var usuarioCorrecto = "fati";
var contraseñaCorrecta = "1234";

// pedir un usuario y contraseña
// var usuario = prompt("Ingrese su usuario");
// var contraseña = prompt("Ingrese su contraseña");

// 3 intentos max !!!!
// msj de bienvenida si esta correcto
// msj de error si no lo logra
var usuarioIngresado;
var contraseñaIngresada;
var intentos = 0;

while(intentos < 3) {

    // volvemos a pedir datos
    usuarioIngresado = prompt("Ingrese su usuario");
    contraseñaIngresada = prompt("Ingrese su contraseña");
    // me fijo si escribio bien contra y usuario
    if (usuarioIngresado===usuarioCorrecto && contraseñaIngresada===contraseñaCorrecta) {
        alert("Bienvenido de nuevo "+usuarioIngresado);
        break;
    }
    // le aviso que lo hizo mal
    alert("Incorrecto, ingrese datos de nuevo");
    if (intentos===2) {
        alert("Ya no tiene más intentos");
    }
    // me fijo si estoy en la ultima vuelta para avisar que no hay mas intentos
    intentos++;
};