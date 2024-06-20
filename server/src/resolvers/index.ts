const resolvers = {
  Query: {
    categories: () => {},
    randomJoke: (_: any, { category }: { category: string }) =>{},
  },
};

export default resolvers;