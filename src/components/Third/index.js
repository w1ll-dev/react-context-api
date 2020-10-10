import React from "react";
import "./style.css";

// context
import { useCount } from "../../context/Counter";

const Third = () => {
  const { count, increment, decrement } = useCount();
  return (
    <div>
      <button onClick={increment}>increment</button>
      {count}
      <button onClick={decrement}>decrement</button>
    </div>
  );
};

export default Third;
