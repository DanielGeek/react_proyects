const request = require('supertest');
const { default: app } = require('../../server');


test('Should have /graphql route', async () => {
  const response = await request(app).get('/graphql');
  expect(response.statusCode).toBe(200);
});