import { getHeroById, getHeroByOwner } from "../../src/base-tests/08-imp-exp";
import heroes from "../../src/data/heroes";

describe('Test in 08-imp-exp', () => {

    test('getHeroById should return a hero by ID', () => {

        const id = 1;
        const hero = getHeroById( id );
        
        expect( hero ).toEqual({
            id: 1,
            name: 'Batman',
            owner: 'DC'
        })
    });
    
    test('getHeroById should return undefined if do not exist', () => {

        const id = 100;
        const hero = getHeroById( id );
        
        expect( hero ).toBeFalsy();

    });

    test('getHeroByOwner should return heroes of DC', () => {
        const owner = 'DC';
        const heroesTest = getHeroByOwner( owner );

        expect( heroesTest.length ).toBe( 3 );
        expect( heroesTest ).toEqual([{
            id: 1,
            name: 'Batman',
            owner: 'DC'
        },
        {
            id: 3,
            name: 'Superman',
            owner: 'DC'
        },
        {
            id: 4,
            name: 'Flash',
            owner: 'DC'
        }]);
        expect( heroesTest ).toEqual( heroes.filter( (hero ) => hero.owner === owner ) );
    });

    test('getHeroByOwner should return heroes of Marvel', () => {
        const owner = 'Marvel';
        const heroesTest = getHeroByOwner( owner );

        expect( heroesTest.length ).toBe( 2 );
        
        expect( heroesTest ).toEqual( heroes.filter( (hero ) => hero.owner === owner ) );
    });
});