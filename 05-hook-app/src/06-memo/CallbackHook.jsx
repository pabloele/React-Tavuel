import { useCallback, useState } from "react";
import { ShowIncrement } from "../ShowIncrement";

const CallbackHook = () => {
  const [counter, setCounter] = useState(10);

  const incrementfather = useCallback((v) => {
    setCounter((value) => value + v);
  }, []);

  return (
    <>
      <h1>useCallback Hook{counter}</h1>
      <hr />
      <ShowIncrement increment={incrementfather} />
    </>
  );
};

export default CallbackHook;
