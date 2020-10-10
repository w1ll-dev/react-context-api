import React, { createContext, useState, useContext } from "react";

const CounterContext = createContext();

export const CounterProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  return (
    <CounterContext.Provider value={{ count, increment, decrement }}>
      {children}
    </CounterContext.Provider>
  );
};

export const useCount = () => {
  const context = useContext(CounterContext);
  const { count, increment, decrement } = context;
  return { count, increment, decrement };
};
