import { getImage } from "../../src/base-tests/11-async-await";

describe('Testing in 11-async-await.js', () => {
    test('getImage should return an error if we don`t have a api key', async() => {

        const resp = await getImage();
        // expect( typeof url ).toBe('string');
        expect( resp ).toBe('Image not found');
    });
});