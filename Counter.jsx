import React from "react";
import { Link } from "react-router-dom";
import useCounter from "./useCounter";

const Counter = () => {
  const { count, increment, decrement, reset, localSetValue } = useCounter();

  return (
    <div className="counter">
      <div className="counter-header">
        <h1>COUNTER APP</h1>
        <p className="count-style">{count}</p>
      </div>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
      <input
        type="number"
        placeholder="Enter a value"
        onChange={(e) => localSetValue(Number(e.target.value))}
      />
      <Link className="linkHome" to="/">
        Home
      </Link>
    </div>
  );
};

export default Counter;

