import { getActiveUser, getUser } from "../../src/base-tests/05-functions";

describe('Tests in 05-functions', () => {
    test('getUser should retorn an object', () => {

        const testUser = {
            uid: 'ABC123',
            username: 'The_Father123'
        };

        const user = getUser();

        expect( testUser ).toEqual( user );

    });

    test('getActiveUser should retorn an object', () => {
        
        const name = 'Daniel';

        const activeUser = getActiveUser( name );

        expect( activeUser ).toStrictEqual({
            uid: 'ABC421',
            username: name
        });

    });
});