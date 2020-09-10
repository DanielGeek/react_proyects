
const personajes = ['Goku', 'Vegeta', 'Trunks'];
const [ , , p2 ] = personajes;
// console.log(p2);

const retornaArreglo = () => {
    return ['ABC', 123];
}

const [ letras, numeros ] = retornaArreglo();
// console.log(letras, numeros);
// console.log( personajes[0] );
// console.log( personajes[1] );
// console.log( personajes[2] );

const useState = ( valor ) => {
    return [ valor, () => { console.log('Hola Mundo') }]
}

const [ nombre, setNombre ] = useState('Goku');
// console.log(arr);
// arr[1]();
console.log(nombre);
setNombre();