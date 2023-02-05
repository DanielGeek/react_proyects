const request = require('supertest');
const { default: app } = require('../../server');

test('Should listen on port 4000', async () => {
  const response = await request(app).get('/');
  expect(response.statusCode).toBe(200);
});
