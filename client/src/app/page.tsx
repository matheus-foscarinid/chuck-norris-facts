"use client";

import JokeCategorySelector from "./components/JokeCategorySelector";
import { ApolloProvider } from "@apollo/client";
import { JokeInfosContextProvider } from "./context/JokeInfosContext";
import createApolloClient from "./apollo/apollo-client";

const client = createApolloClient();

export default function Home() {
  return (
    <main>
      <JokeInfosContextProvider>
        <ApolloProvider client={client}>
          <header>
            <h1>Chuck Norris Facts</h1>
          </header>

          <section>
            <JokeCategorySelector />
            {/* <JokeDisplay /> */}
          </section>
        </ApolloProvider>
      </JokeInfosContextProvider>
    </main>
  );
}
