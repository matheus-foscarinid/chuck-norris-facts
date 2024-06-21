import { createContext, useContext, useState, ReactNode } from "react";

const JokeInfosContext = createContext({});

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