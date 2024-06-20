import axios from 'axios';

const BASE_URL = 'https://api.chucknorris.io/jokes';

export const ChuckNorrisServiceJokes = {
  getCategories: async () => {
    try {
      const response = await axios.get(`${BASE_URL}/categories`);
      return response.data; // Returns categories
    } catch (error) {
      console.error('Error fetching categories:', error);
      throw new Error('Failed to fetch categories');
    }
  },
  getRandomJoke: async (category: string) => {
    try {
      const response = await axios.get(`${BASE_URL}/random`, { params: { category } });
      return response.data; // Returns a random joke for the given category
    } catch (error) {
      console.error(`Error fetching random joke for category ${category}:`, error);
      throw new Error(`Failed to fetch random joke for category ${category}`);
    }
  },
};