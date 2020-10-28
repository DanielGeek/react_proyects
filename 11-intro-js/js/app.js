const persona = {
    nombre: 'Daniel',
    profesion: 'Desarrollador web',
    edad: 500
}

console.log(Object.keys(persona));

// const carrito = ['Producto 1', 'Producto 2', 'Producto 3'];

// carrito.map(producto => {
//     return `El producto es ${producto}`;
// });

// console.log(carrito);

// const appContenedor = document.querySelector('#app');

// let html = '';
// carrito.forEach(producto => {
//     html += `<li>${producto}</li>`;
// })

// appContenedor.innerHTML = html;


// metodo o funciones en un objeto

// const persona = {
//     nombre: 'Daniel',
//     trabajo: 'Desarrollador web',
//     edad: 30,
//     musicaRock: true,
//     mostrarInformacion() {
//         console.log(`${this.nombre} es ${this.trabajo} y su edad es ${this.edad}`)
//     }
// }

// persona.mostrarInformacion();

// Object literal enhancement

// const banda = 'Metalica';
// const genero = 'Heavy Metal';
// const canciones = ['Master Of Puppets', 'Seek & Destroy', 'Enter Sandman'];

// form anterior
// const metallica = {
//     banda: banda,
//     genero: genero,
//     canciones: canciones
// }

// forma nueva
// const metallica = { banda, genero, canciones };

// console.log(metallica);

// Destructuring de objetos
// const aprendiendoJS = {
//     version: {
//         nueva: 'ES6',
//         anterior: 'ES5'
//     },
//     frameworks: ['React', 'VueJS', 'AngularJS']
// }

// Destructuring es extraer valores de un objeto

// console.log(aprendiendoJS);

// version anterior
// let version = aprendiendoJS.version.nueva;;
// let frameworks = aprendiendoJS.frameworks[1];

// Destructuring froma nueva
// let { frameworks } = aprendiendoJS;
// console.log(frameworks[0]);


// // Object Constructor
// function Tarea(nombre, urgencia) {
//     this.nombre = nombre;
//     this.urgencia = urgencia;
// }

// // Agregar un prototype a tarea:
// Tarea.prototype.mostrarInformacionTarea = function () {
//     return `La tarea ${this.nombre} tiene un prioridad de ${this.urgencia}`;
// }

// // Crear una nueva tarea:
// const tarea1 = new Tarea('Aprender JavaScript y React', 'Urgente');
// const tarea2 = new Tarea('Preparar café', 'Urgente');
// console.log(tarea1);
// console.log(tarea2.mostrarInformacionTarea());
// console.log(tarea2);
// console.log(tarea2.mostrarInformacionTarea());

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

