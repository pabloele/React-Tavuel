import { useState } from "react";

export const useCounter = (initialValue = 10) => {
  const [counter, setCounter] = useState(initialValue);

  const increment = (value = 1) => {
    setCounter((c) => c + value);
  };
  const reset = () => {
    setCounter(initialValue);
  };
  const decrement = (value = 1) => {
    if (counter === 0) return;
    setCounter((c) => c - value);
  };
  return {
    counter,
    increment,
    decrement,
    reset,
  };
};

// export default useCounter;
