const request = require('supertest');
const { default: app } = require('../../server');


describe('GraphQL endpoint', () => {
  it('should respond to a GraphQL query', async () => {
    const query = `
      query {
        user
      }
    `;

    const res = await request(app)
      .post('/graphql')
      .send({ query });

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('data.user');
  });
});