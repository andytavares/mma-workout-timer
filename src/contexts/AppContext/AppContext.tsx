import React, { useState } from "react";

export interface IAppContext {
  workoutLength: number;
  setWorkoutLength: any;
  difficulty: number;
  setDifficulty: any;
  nextCallout: number;
  setNextCallout: any;
}

export const AppContext = React.createContext<IAppContext>({
  nextCallout: 1,
  setNextCallout: null,
  workoutLength: 300,
  setWorkoutLength: null,
  difficulty: 300,
  setDifficulty: null,
});

export const AppContextProvider: React.FC = ({ children }) => {
  const [workoutLength, setWorkoutLength] = useState(15);
  const [nextCallout, setNextCallout] = useState(1);
  const [difficulty, setDifficulty] = useState(1);
  return (
    <AppContext.Provider
      value={{
        nextCallout,
        setNextCallout,
        workoutLength,
        setWorkoutLength,
        difficulty,
        setDifficulty,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
