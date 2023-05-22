import { getGreeting } from "../../src/base-tests/02-template-strings";

describe('Tests in 02-template-strings', () => { 
    test('getGretting should return "Hello Daniel"', () => {

        const name = 'Daniel';
        const message = getGreeting( name );

        expect( message ).toBe(`Hello ${ name }`);
    });
});