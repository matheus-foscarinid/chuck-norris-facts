const typeDefs = `#graphql
  type Joke {
    id: String!
    url: String
    value: String!
  }

  type Query {
    categories: [String!]!
    randomJoke(category: String): Joke!
  }
`;

export default typeDefs;