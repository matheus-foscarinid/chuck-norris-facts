import { JokeInfosContextProvider } from "./context/JokeInfosContext";

export default function Home() {
  return (
    <main>
      <JokeInfosContextProvider>
        <header>
          <h1>Chuck Norris Facts</h1>
        </header>

        <section>
          <JokeCategorySelector />
          <JokeDisplay />
        </section>
      </JokeInfosContextProvider>
    </main>
  );
}
