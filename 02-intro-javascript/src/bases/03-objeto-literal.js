const persona = {
    nombre: 'Tony',
    apellido: 'Start',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zip: 55321321,
        lat: 14.3232,
        lng: 34.02121
    }
};

// console.log( { persona });
// console.table( persona );
//crear un nuevo objeto de persona
const persona2 = { ...persona };
persona2.nombre = 'Peter';

console.log ( persona );
console.log(persona2);