import React from "react";
import "./style.css";
// components
import First from "../components/First";
import Second from "../components/Second";
import Third from "../components/Third";

// Context
import { CounterProvider } from "../context/Counter";

export const App = () => (
  <CounterProvider>
    <div className="wrapper">
      <First />
      <Second />
      <Third />
    </div>
  </CounterProvider>
);
