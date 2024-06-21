import React, { useState, useEffect } from 'react';
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
  const { jokeInfos } = useJokeInfosContext();
  const [joke, setJoke] = useState('');

  const { error, refetch } = useQuery(GET_JOKE_QUERY, {
    variables: { category: jokeInfos.selectedCategory },
    onCompleted: (data) => {
      setJoke(data.randomJoke.value);
    },
    skip: !jokeInfos.selectedCategory,
  });

  useEffect(() => {
    const handleKeyPress = (event: any) => {
      if (event.key === 'Enter') {
        fetchNewJoke();
      }
    };

    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [jokeInfos.selectedCategory]); // Re-bind the event listener if the selected category changes

  const fetchNewJoke = async () => {
    const { data } = await refetch();
    setJoke(data.randomJoke.value);
  };

  if (error) return <p className="text-red-500">Error :(</p>;

  return (
    <div className="flex flex-col items-center justify-center p-4 w-full bg-white rounded-lg shadow-md">
      <p className="text-lg text-gray-800 mb-4 text-center">{joke}</p>
      <button 
        onClick={fetchNewJoke} 
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition-colors duration-200 ease-in-out mb-2"
      >
        Fetch New Joke
      </button>
      <p className="text-xs text-gray-500">Press Enter to fetch a new joke</p>
    </div>
  );
};

export default JokeDisplay;