"use client";

import JokeCategorySelector from "./components/JokeCategorySelector";
import JokeDisplay from "./components/JokeDisplay";

import { ApolloProvider } from "@apollo/client";
import { JokeInfosContextProvider } from "./context/JokeInfosContext";
import createApolloClient from "./apollo/apollo-client";

const client = createApolloClient();

export default function Home() {
  return (
    <main className="bg-gray-100 min-h-screen flex flex-col gap-4 p-4 items-center justify-center">
      <JokeInfosContextProvider>
        <ApolloProvider client={client}>
          <header className="text-4xl font-bold text-center text-gray-800 my-8">
            <h1>Chuck Norris Facts</h1>
          </header>

          <JokeCategorySelector/>
          <JokeDisplay />
        </ApolloProvider>
      </JokeInfosContextProvider>
    </main>
  );
}
