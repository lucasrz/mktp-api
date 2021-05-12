import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import typeDefs from './src/infrastructure/graphql/schema';
import resolvers from './src/infrastructure/graphql';
import cors from 'cors';
import { connectDatabase } from './src/infrastructure/database';

const server = new ApolloServer({ typeDefs, resolvers });
const app = express();
server.applyMiddleware({ app });
app.use(cors);

app.listen({ port: 4000 }, async () => {
  try {
    connectDatabase();
  } catch (e) {
    throw new Error('Could not connect to database');
  }
  console.log(`Server started at http://localhost:4000`);
});
