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

const reverseString2 = str => {
  return new Promise((resolve, reject) => {
    if (!str) {
      reject(Error('Error'));
    }
    resolve(str.split("").reverse().join(""));
  });
};

test('Should have a promise', () => {
  return reverseString2('Hello')
    .then(string => {
      expect(string).toBe('olleH');
  });
});

test('Test async/await', async () => {
  const string = await reverseString2('Hello');
  expect(string).toBe('olleH');
});