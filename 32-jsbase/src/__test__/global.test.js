const text = "Hello World";
const fruits = ['Apple', 'Melon', 'Bannana'];

test('Should have a text', () => {
  expect(text).toMatch(/World/);
});

test('Should have a Bannana', () => {
  expect(fruits).toContain('Bannana');
});

test('Should have a number Greater', () => {
  expect(10).toBeGreaterThan(9);
});

test('Should have true', () => {
  expect(true).toBeTruthy();
});

const reverseString = (str, callback) => {
  callback(str.split("").reverse().join(""));
};

test('Should have a reverse string', () => {
  reverseString('Hello', (str) => {
    expect(str).toBe('olleH');
  });
});