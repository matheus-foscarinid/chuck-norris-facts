import { ApolloServer } from 'apollo-server';

import resolvers from './resolvers/index';
import typeDefs from './schemas';

const startServer = () => {
  const server = new ApolloServer({
    resolvers,
    typeDefs,
  });
  
  server.listen({ port: process.env.PORT || 3000 }).then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`)
  });
}

startServer();