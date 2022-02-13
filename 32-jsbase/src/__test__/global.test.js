const text = "Hello World";

test('Should have a text', () => {
  expect(text).toMatch(/World/);
});
