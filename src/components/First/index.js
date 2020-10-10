import React from "react";
import "./style.css";

import { useCount } from "../../context/Counter";

const First = () => {
  const { count, increment, decrement } = useCount();
  return (
    <div>
      <button onClick={increment}>increment</button>
      {count}
      <button onClick={decrement}>decrement</button>
    </div>
  );
};

export default First;
