import { getHeroById } from "./08-imp-exp";

export const getHeroByIdAsync = ( id ) => {
    return new Promise( (resolve, reject ) => {

        setTimeout( () => {
            const p1 = getHeroById( id );
            if ( p1 ) {
                resolve( p1 );
            } else {
                reject( 'Could not find hero with id ' + id );
            }
        }, 1000 );
    });
}