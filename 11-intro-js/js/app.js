// Object Constructor
function Tarea(nombre, urgencia) {
    this.nombre = nombre;
    this.urgencia = urgencia;
}

// Crear una nueva tarea:
const tarea1 = new Tarea('Aprender JavaScript y React', 'Urgente');
const tarea2 = new Tarea('Preparar café', 'Urgente');
const tarea3 = new Tarea('Pasear al perro', 'Media');
const tarea4 = new Tarea('COnocer a mis suegros', 'Baja');

console.log(tarea1);
console.log(tarea2);
console.log(tarea3);
console.log(tarea4);

// Objetos

// Object Literal
// const persona = {
//     nombre: 'Daniel',
//     profesion: 'Desarrollador Web',
//     edad: 30
// }

// const persona2 = {
//     nombre: 'Elias',
//     profesion: 'Desarrollador MERN',
//     edad: 30
// }

// console.log(persona);
// console.log(persona2);

// arrow functions

// let viajando = destino => `Viajando a la ciudad de: ${destino}`;

// let viaje;
// viaje = viajando('Paris');
// viaje = viajando('Londres');

// console.log(viaje);


// parametros por default en las funciones
// const actividad = function (nombre = 'Walter White', actividad = 'Enseñar Quimica') {
//     console.log(`La persona ${nombre}, esta realizando la actividad ${actividad}`);
// }

// actividad('Daniel', 'Aprender JavaScript');
// actividad('Pedro', 'Creando un sitio web');
// actividad('Antonio');



// Function Declaretion
// function saludar(nombre) {

//     console.log('Bienvenido ' + nombre);
// }
// saludar('Daniel');

// // Function Expresion

// const cliente = function (nombreCliente) {
//     console.log(`Mostrando datos del cliente: ${nombreCliente}`);
// }
// cliente('Daniel');

// Template Strings
// const nombre = 'Daniel';
// const trabajo = 'Desarrollador Web';

// Concatenar js
// console.log('Nombre: ' + nombre + ', Trabajo: ' + trabajo);
// console.log(`Nombre: ${nombre}, Trabajo: ${trabajo}`);

// Concatenar con múltiples líneas
// const contenedorApp = document.querySelector('#app');
// let html = `
//         <ul>
//             <li>Nombre: ${nombre} </li>
//             <li>Trabajo: ${trabajo} </li>
//         </ul>
//     `;

// contenedorApp.innerHTML = html; 

// scope
// const musica = 'Rock';

// if (musica) {
//     const musica = 'Grunge';
//     console.log('dentro del if:', musica);
// }

// console.log('Fuera del IF', musica);

