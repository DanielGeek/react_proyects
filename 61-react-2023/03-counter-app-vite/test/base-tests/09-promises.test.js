import { getHeroByIdAsync } from "../../src/base-tests/09-promises";

describe('Tests in 09-promises', () => {
    test('getHeroByIdAsync should return a hero', (done) => {
        const id = 1;
        getHeroByIdAsync( id )
            .then( hero => {
                expect(hero).toEqual({
                    id: 1,
                    name: 'Batman',
                    owner: 'DC'
                });
                done();
            });
    });
    
    test('getHeroByIdAsync should return an error if hero do not exits', (done) => {
        const id = 100;
        getHeroByIdAsync( id )
            .then( hero => {
                expect( hero ).toBeFalsy();
                done();
            })
            .catch( error => {
                
                expect( error ).toBe(`Could not find hero with id ${ id }`);

                done();
            });
    });
});