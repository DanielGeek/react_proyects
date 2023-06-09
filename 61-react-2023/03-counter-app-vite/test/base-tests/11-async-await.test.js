import { getImage } from "../../src/base-tests/11-async-await";

describe('Testing in 11-async-await.js', () => {
    test('getImage should return an URL of the image', async() => {

        const url = await getImage();
        expect( typeof url ).toBe('string');
    });
});