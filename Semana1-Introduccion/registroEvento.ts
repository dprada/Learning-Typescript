interface Asistente{
    id: number;
    nombre: string;
    email: string;
}

class RegistroEvento {
    private asistentes: Asistente[] = [];

    registrar(asistente: Asistente) {
        this.asistentes.push(asistente);
    }

    listar() {
	console.log("Lista de Asistentes:");
	this.asistentes.forEach(asistente => {
		console.log(`${asistente.id}: ${asistente.nombre} - ${asistente.email}`);
        });
    }

    buscar(nombre: string) {
	const resultado = this.asistente.filter(asistente => asistente.nombre.includes(nombre));
	console.log(`Resultados de la busqueda `)

