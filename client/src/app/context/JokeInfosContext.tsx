import { createContext, useContext, useState, ReactNode } from "react";

const JokeInfosContext = createContext({
    jokeInfos: {
        currentJoke: '',
        selectedCategory: '',
    },
    setJokeInfos: (jokeInfos: { currentJoke: string; selectedCategory: string; }) => {},
});

export const JokeInfosContextProvider = ({ children }: { children: ReactNode }) => {
    const [jokeInfos, setJokeInfos] = useState({
      currentJoke: '',
      selectedCategory: '',
    });

    return (
        <JokeInfosContext.Provider value={{ jokeInfos, setJokeInfos }}>
            {children}
        </JokeInfosContext.Provider>
    );
};

export const useJokeInfosContext = () => useContext(JokeInfosContext);