import { createContext, useContext, useState } from "react";

const GameContext = createContext();

function GameProvider({ children }) {
  const [inputNum, setInputNum] = useState("");
  const [chosenNum, setChosenNum] = useState(null);
  return (
    <GameContext.Provider
      value={{ inputNum, setInputNum, chosenNum, setChosenNum }}
    >
      {children}
    </GameContext.Provider>
  );
}

function useGameContext() {
  const context = useContext(GameContext);
  if (!context) return "Hook used outside of the context provider !";

  return context;
}

export { GameProvider, useGameContext };
