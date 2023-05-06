const characters = ['Goku', 'Vegeta', 'Trunks'];

const [ , , p3 ] = characters;

console.log( p3 );

const retornArray = () => {
    return ['ABC', 123];
}

const [ letters, numbers ] = retornArray();
console.log(letters, numbers );

const useState = ( value ) => {
    return [ value, () => { console.log("Hello World") } ];
}

const [ name, setName ] = useState('Goku');
console.log( name );
setName();