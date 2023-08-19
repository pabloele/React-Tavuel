import { useState } from "react";

const CouterApp = () => {
  const [counter, setCounter] = useState({
    counter1: 10,
    counter2: 20,
    counter3: 30,
  });

  const { counter1, counter2, counter3 } = counter;

  return (
    <>
      <h1>Counter1: {counter1}</h1>
      <h1>Counter2: {counter2}</h1>
      <h1>Counter3: {counter3}</h1>
      <hr />

      <button
        className="btn btn-primary"
        onClick={() => setCounter({ ...counter, counter1: counter1 + 1 })}
      >
        counter1 +1
      </button>
      <button
        className="btn btn-primary"
        onClick={() => setCounter({ ...counter, counter2: counter2 + 1 })}
      >
        counter2 +1
      </button>
      <button
        className="btn btn-primary"
        onClick={() => setCounter({ ...counter, counter3: counter3 + 1 })}
      >
        counter3 +1
      </button>
    </>
  );
};

export default CouterApp;
