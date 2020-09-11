// import { hereos } from './data/heroes';
// import { heroes } from './data/heroes';
import heroes, { owners } from '../data/heroes';

console.log( owners );

// funcion para devolver el hereo que coincida con el id
const getHeroeById = ( id ) => heroes.find( (heroe) => heroe.id === id);

console.log( getHeroeById(2) );

//buscar todos los hereos que coincidan con owner
const getHeroesByOwner = ( owner ) => heroes.filter( (hereo) => hereo.owner === owner);

console.log( getHeroesByOwner('DC') );