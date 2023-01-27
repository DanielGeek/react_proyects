import express from 'express';
require('dotenv').config();
import { ApolloServer } from 'apollo-server-express';
import typeDefs from './schema';
import resolvers from './resolvers';
const { dbConnection } = require('./database/config');

const startServer = async () => {
  const app = express();

  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });
  await server.start();
  server.applyMiddleware({ app });

  await dbConnection();

  app.listen(process.env.PORT, () => {
    console.log(`Server ready at http://localhost:${process.env.PORT}${server.graphqlPath}`);
  });
};

startServer();