import express from 'express';
require('dotenv').config();
import { ApolloServer } from 'apollo-server-express';
import typeDefs from './schema';
import resolvers from './resolvers';
const { dbConnection } = require('./database/config');

const app = express();
const startServer = async () => {

  // Create the Apollo server
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });
  await server.start();

  // Apply the Apollo GraphQL middleware
  server.applyMiddleware({ app });

  await dbConnection();

  // Start the Express server
  app.listen(process.env.PORT, () => {
    console.log(`Server ready at http://localhost:${process.env.PORT}${server.graphqlPath}`);
  });
};

startServer();

export default app;