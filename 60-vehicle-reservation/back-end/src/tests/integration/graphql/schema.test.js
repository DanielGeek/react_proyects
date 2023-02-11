const { gql } = require('apollo-server-express');
const schema = require('../../../schema');


describe('GraphQL Reservation Schema', () => {
    it('should have the correct type definitions', () => {
      expect(schema).toBeDefined();
    });
  });
