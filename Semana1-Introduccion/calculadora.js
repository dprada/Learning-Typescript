function sumar(a, b) {
    return a + b;
}
function restar(a, b) {
    return a - b;
}
function multiplicar(a, b) {
    return a * b;
}
function dividir(a, b) {
    if (b === 0) {
        console.log("No se puede dividir por cero.");
        return 0;
    }
    return a / b;
}
var suma = {
    tipo: "suma",
    ejecutar: sumar
};
var resta = {
    tipo: "resta",
    ejecutar: restar
};
var multiplica = {
    tipo: "multiplica",
    ejecutar: multiplicar
};
var divide = {
    tipo: "divide",
    ejecutar: dividir
};
console.log("".concat(suma.tipo, " de 5 y 3 = ").concat(suma.ejecutar(5, 3)));
console.log("".concat(resta.tipo, " de 5 y 3 = ").concat(resta.ejecutar(5, 3)));
console.log("".concat(multiplica.tipo, " de 5 y 3 = ").concat(multiplica.ejecutar(5, 3)));
console.log("".concat(divide.tipo, " de 5 y 3 = ").concat(divide.ejecutar(5, 3)));
