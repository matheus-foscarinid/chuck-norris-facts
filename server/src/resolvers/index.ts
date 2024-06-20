import { ChuckNorrisServiceJokes } from "../services/chuck-norris-jokes.service";

const resolvers = {
  Query: {
    categories: () => ChuckNorrisServiceJokes.getCategories(),
    randomJoke: (_: any, { category }: { category: string }) => ChuckNorrisServiceJokes.getRandomJoke(category),
  },
};

export default resolvers;