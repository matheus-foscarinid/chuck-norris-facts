import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { useJokeInfosContext } from '../context/JokeInfosContext';

const GET_JOKE_CATEGORIES = gql`
  query GetJokeCategories {
    categories
  }
`;

function JokeCategorySelector() {
  const { loading, error, data } = useQuery(GET_JOKE_CATEGORIES, {
    onCompleted: (data) => {
      setJokeInfos({ ...jokeInfos, selectedCategory: data.categories[0] });
    }
  });
  const { jokeInfos, setJokeInfos } = useJokeInfosContext();

  const handleCategoryChange = (event: any) => {
    const selectedCategory = event.target.value;
    setJokeInfos({ ...jokeInfos, selectedCategory });
  };

  if (loading) return;

  return (
    <select
      onChange={handleCategoryChange}
      value={jokeInfos.selectedCategory}
      className="p-4 border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md shadow-sm"
    >
      {data.categories.map((category: string) => (
        <option key={category} value={category}>
          {category.charAt(0).toUpperCase() + category.slice(1)}
        </option>
      ))}
    </select>
  );
}

export default JokeCategorySelector;