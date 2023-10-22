import { useState } from "react";

export default function useCounter(initialValue = 0) {
  const [count, setValue] = useState(initialValue);

  const increment = () => setValue(count + 1);
  const decrement = () => setValue(count - 1);
  const reset = () => setValue(initialValue);
  const localSetValue = (newValue) => setValue(newValue);

  return { count, increment, decrement, reset, localSetValue };
}