function sumar(a: number, b:number): number {
    return a + b
}

function restar(a: number, b:number): number {
    return a - b
}

function multiplicar(a: number, b:number): number {
    return a * b
}

function dividir(a: number, b:number): number {
    if (b === 0){
	console.log("No se puede dividir por cero.");
	return 0;
    }
    return a / b;
}

interface Operacion {
    tipo: string;
    ejecutar: (a: number, b:number) => number;
}

let suma: Operacion = {
    tipo: "suma",
    ejecutar: sumar
};

let resta: Operacion = {
    tipo: "resta",
    ejecutar: restar
};

let multiplica: Operacion = {
    tipo: "multiplica",
    ejecutar: multiplicar
};

let divide: Operacion = {
    tipo: "divide",
    ejecutar: dividir
};

console.log(`${suma.tipo} de 5 y 3 = ${suma.ejecutar(5, 3)}`);
console.log(`${resta.tipo} de 5 y 3 = ${resta.ejecutar(5, 3)}`);
console.log(`${multiplica.tipo} de 5 y 3 = ${multiplica.ejecutar(5, 3)}`);
console.log(`${divide.tipo} de 5 y 3 = ${divide.ejecutar(5, 3)}`);

