let message: string = "Hola, TypeScript!";
let esVerdadero: boolean = true;
let entero: number = 6;
let decimal: number = 3.14;
let hexadecimal: number = 0xf00d;
let binario: number = 0b1010;
let octal: number = 0o744;
let color: string = "azul";
let miNombre: string = `Mi nombre es ${color}`;
let listaDeNumeros: number[] = [1, 2, 3];
// O usando un arreglo genérico
let listaDeStrings: Array<string> = ["a", "b", "c"];
let x: [string, number];
x = ["hola", 10]; // Correcto
// x = [10, "hola"]; // Incorrecto
enum Color {Rojo, Verde, Azul}
let c: Color = Color.Verde;
let noEstoySeguro: any = 4;
noEstoySeguro = "quizás sea una cadena";
noEstoySeguro = false; // ok, definitivamente es un booleano
function advertirUsuario(): void {
    console.log("Este es un aviso");
}
let u: undefined = undefined;
let n: null = null;
console.log(message);
