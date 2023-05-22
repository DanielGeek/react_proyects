// import heros, { owners } from '../data/heros';
import heros from '../data/heros';

// console.log( owners );

export const getHeroById = ( id ) => heros.find( hero => hero.id === id );

// console.log( heros );
// console.log(getHeroById(2));

export const getHeroByOwner = ( owner ) => heros.filter( hero => hero.owner === owner );

// console.log( getHeroByOwner('DC') );