const axios = require('axios');
const { graphql } = require('graphql');
const schema = require('../../../schema/schema');

jest.mock('axios');

describe('GraphQL Schema', () => {
  it('should retrieve a user by id', async () => {
    axios.get.mockResolvedValueOnce({
      data: {
        id: '23',
        firstName: 'Bill',
        age: 20,
      },
    });

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

    expect(axios.get).toHaveBeenCalledWith('http://localhost:3000/users/23');
    expect(result).toHaveProperty('data.user.id', '23');
    expect(result).toHaveProperty('data.user.firstName', 'Bill');
    expect(result).toHaveProperty('data.user.age', 20);
  });
});
