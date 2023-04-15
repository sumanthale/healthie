import React, { createContext, useState } from "react";

const FitnessContext = createContext();

const FitnessContextProvider = ({ children }) => {
  const [completed, setCompleted] = useState([]);
  const [workout, setWorkout] = useState(0);
  const [calories, setCalories] = useState(0);
  const [minutes, setMinutes] = useState(0);
  return (
    <FitnessContext.Provider
      value={{
        completed,
        setCompleted,
        workout,
        setWorkout,
        calories,
        setCalories,
        minutes,
        setMinutes,
      }}
    >
      {children}
    </FitnessContext.Provider>
  );
};

export { FitnessContext, FitnessContextProvider };
