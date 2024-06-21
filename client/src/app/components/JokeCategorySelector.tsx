import { useQuery, gql } from '@apollo/client';

const GET_JOKE_CATEGORIES = gql`
  query GetJokeCategories {
    categories
  }
`;

function JokeCategorySelector() {
  const { loading, error, data } = useQuery(GET_JOKE_CATEGORIES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <select>
      {data.categories.map((category: string) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
}

export default JokeCategorySelector;