var message = "Hola, TypeScript!";
var esVerdadero = true;
var entero = 6;
var decimal = 3.14;
var hexadecimal = 0xf00d;
var binario = 10;
var octal = 484;
var color = "azul";
var miNombre = "Mi nombre es ".concat(color);
var listaDeNumeros = [1, 2, 3];
// O usando un arreglo genérico
var listaDeStrings = ["a", "b", "c"];
var x;
x = ["hola", 10]; // Correcto
// x = [10, "hola"]; // Incorrecto
var Color;
(function (Color) {
    Color[Color["Rojo"] = 0] = "Rojo";
    Color[Color["Verde"] = 1] = "Verde";
    Color[Color["Azul"] = 2] = "Azul";
})(Color || (Color = {}));
var c = Color.Verde;
var noEstoySeguro = 4;
noEstoySeguro = "quizás sea una cadena";
noEstoySeguro = false; // ok, definitivamente es un booleano
function advertirUsuario() {
    console.log("Este es un aviso");
}
var u = undefined;
var n = null;
console.log(message);
