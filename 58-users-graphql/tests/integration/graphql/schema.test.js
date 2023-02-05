const { graphql } = require('graphql');
const schema = require('../../../schema/schema');

describe('GraphQL Schema', () => {
  it('should retrieve a user by id', async () => {
    const query = `
      query ($id: String) {
        user(id: $id) {
          id
          firstName
          age
        }
      }
    `;

    const variables = {
      id: '23',
    };

    const result = await graphql(schema, query, null, null, variables);

    expect(result).toHaveProperty('data.user.id', '23');
    expect(result).toHaveProperty('data.user.firstName', 'Bill');
    expect(result).toHaveProperty('data.user.age', 20);
  });
});
