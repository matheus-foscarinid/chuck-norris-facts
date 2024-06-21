import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { useJokeInfosContext } from '../context/JokeInfosContext';

const GET_JOKE_CATEGORIES = gql`
  query GetJokeCategories {
    categories
  }
`;

function JokeCategorySelector() {
  const { loading, error, data } = useQuery(GET_JOKE_CATEGORIES);
  const { jokeInfos, setJokeInfos } = useJokeInfosContext();

  const handleCategoryChange = (event: any) => {
    const selectedCategory = event.target.value;
    setJokeInfos({ ...jokeInfos, selectedCategory });
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <select onChange={handleCategoryChange} value={jokeInfos.selectedCategory}>
      {data.categories.map((category: string) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
}

export default JokeCategorySelector;