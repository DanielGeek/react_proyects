import { getHeroById } from "./bases/08-imp-exp";

// const promise = new Promise( (resolve, reject ) => {

//     setTimeout( () => {
//         const p1 = getHeroById(2);
//         resolve( p1 );
//         // reject('Could not be found');
//     }, 2000 );
// });

// promise.then( (hero) => {
//     console.log('hero', hero);
// })
// .catch( err => console.warn( err ) );

const getHeroByIdAsync = ( id ) => {
    return new Promise( (resolve, reject ) => {

        setTimeout( () => {
            const p1 = getHeroById( id );
            if ( p1 ) {
                resolve( p1 );
            } else {
                reject('Could not be found');
            }
        }, 2000 );
    });
}

getHeroByIdAsync(1)
    .then( console.log )
    .catch( console.warn );