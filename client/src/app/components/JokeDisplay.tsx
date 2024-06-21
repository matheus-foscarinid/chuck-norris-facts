import React, { useState } from 'react';
import { gql, useQuery } from '@apollo/client';
import { useJokeInfosContext } from '../context/JokeInfosContext';

const GET_JOKE_QUERY = gql`
  query GetJoke($category: String!) {
    randomJoke(category: $category) {
      id
      value
    }
  }
`;

const JokeDisplay = () => {
  const { jokeInfos, setJokeInfos } = useJokeInfosContext();
  const [joke, setJoke] = useState('');

  const { loading, error, refetch } = useQuery(GET_JOKE_QUERY, {
    variables: { category: jokeInfos.selectedCategory },
    onCompleted: (data) => {
      setJoke(data.randomJoke.value);
    },
    skip: !jokeInfos.selectedCategory,
  });

  const fetchNewJoke = async () => {
    const { data } = await refetch();
    setJoke(data.randomJoke.value);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <p>{joke}</p>
      <button onClick={fetchNewJoke}>Fetch New Joke</button>
    </div>
  );
};

export default JokeDisplay;