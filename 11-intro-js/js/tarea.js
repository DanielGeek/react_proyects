export const nombreTarea = 'Pasear al perro';

// exportar una función
export const crearTarea = (tarea, urgencia) => {
    return `La tarea ${tarea} tiene una urgencia de ${urgencia}`;
}

export const tareaCompletada = () => {
    console.log('La tarea se completó');
}


// Escribir clases

class Tarea {
    constructor(nombre, prioridad) {
        this.nombre = nombre;
        this.prioridad = prioridad
    }
    mostrar() {
        console.log(`${this.nombre} tiene un prioridad ${this.prioridad}`);
    }
    hola() {
        return 'hola';
    }
}

class ComprasPendientes extends Tarea {
    constructor(nombre, prioridad, cantidad) {
        super(nombre, prioridad);
        this.cantidad = cantidad;
    }
    mostrar() {
        super.mostrar();
        console.log(`y la cantidad de ${this.cantidad}`);
    }
}

// instancias del objeto
let tarea1 = new Tarea('Aprender JS', 'Alta');
let tarea2 = new Tarea('Aprender React', 'Alta');
let tarea3 = new Tarea('Aprender Mongo', 'Alta');
let tarea4 = new Tarea('Aprender Css', 'Baja');

// console.log(tarea1.mostrar());
// console.log(tarea2.mostrar());
// console.log(tarea3.mostrar());
// console.log(tarea4.mostrar());


let compra1 = new ComprasPendientes('Arroz', 'Media', 3);
// compra1.mostrar();
// console.log(compra1.hola());