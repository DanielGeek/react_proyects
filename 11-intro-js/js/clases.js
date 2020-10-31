// Escribir clases

class Tarea {
    constructor(nombre, prioridad) {
        this.nombre = nombre;
        this.prioridad = prioridad
    }
    mostrar() {
        return `${this.nombre} tiene un prioridad de ${this.prioridad}`;
    }
}

// instancias del objeto
let tarea1 = new Tarea('Aprender JS', 'Alta');
let tarea2 = new Tarea('Aprender React', 'Alta');
let tarea3 = new Tarea('Aprender Mongo', 'Alta');
let tarea4 = new Tarea('Aprender Css', 'Baja');

console.log(tarea1.mostrar());
console.log(tarea2.mostrar());
console.log(tarea3.mostrar());
console.log(tarea4.mostrar());
