const { ApolloServer } = require('apollo-server-express');

test('Should import ApolloServer', () => {
  expect(ApolloServer).toBeDefined();
});
