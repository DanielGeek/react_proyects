import { retornArray } from "../../src/base-tests/07-destructuring-array";

describe('Tests in 07-destructuring-array', () => {
    test('Should return a string and a number', () => {

        const [ letters, numbers ] = retornArray();

        expect( letters ).toBe( 'ABC' );
        expect( numbers ).toBe( 123 );

        expect(typeof letters).toBe('string');
        expect(typeof numbers).toBe('number');

        expect( letters ).toEqual( expect.any(String) );
    });
})