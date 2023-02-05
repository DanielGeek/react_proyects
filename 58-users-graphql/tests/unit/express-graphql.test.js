const { graphqlHTTP } = require('express-graphql');

test('Should import graphqlHTTP', () => {
  expect(graphqlHTTP).toBeDefined();
});
