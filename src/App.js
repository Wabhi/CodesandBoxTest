import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const [counter, setCounter] = useState(0);
  const handleIncrement = () => {
    setCounter(counter + 1);
  };
  const handleDecrement = () => {
    setCounter((newCount) => {
      let newCounter = newCount - 1;
      if (newCount === 0) {
        newCounter = 0;
      }
      return newCounter;
    });
  };
  const handleReset = () => {
    setCounter(0);
  };
  return (
    <div className="App">
      <h1>Hello Abhishek Tiwari</h1>
      <h4>{counter}</h4>
      <button onClick={handleIncrement}>INCREMENT</button>
      <button onClick={handleDecrement}>DECREMENT</button>
      <button onClick={handleReset}>RESET</button>
    </div>
  );
}
