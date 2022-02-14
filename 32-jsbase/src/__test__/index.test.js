const randomStrings = require('../index');

describe('Test a index file ', () => {

  test('Should have a string', () => {
    expect(typeof (randomStrings())).toBe('string');
  });

  test('Should haven`t the city', () => {
    expect(randomStrings()).not.toMatch('/Cordoba/');
  });

});