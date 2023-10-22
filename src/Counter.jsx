import React from "react";
import { Link } from "react-router-dom";
import useCounter from "./useCounter";
import "./styles.css";

const Counter = () => {
  const { count, increment, decrement, reset, localSetValue } = useCounter();

  return (
    <div className="counter">
      <div className="counter-header">
        <h1>COUNTER</h1>
      </div>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
      <p className="count-style">{count}</p>
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
