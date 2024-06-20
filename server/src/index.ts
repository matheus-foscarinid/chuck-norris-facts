import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

import resolvers from './resolvers/index';
import typeDefs from './schemas';

import 'dotenv/config'

const startServer = async () => {
  const server = new ApolloServer({
    resolvers,
    typeDefs,
  });

  // Passing the server to the startStandaloneServer function will 
  // create an Express server under the hood and add the server as a middleware.
  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  });

  console.log(`🚀 Server ready at: ${url}`);
}

startServer();