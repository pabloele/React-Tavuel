import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementBy } from "./store/slices/counter";
const action = { payload: 2 };
function App() {
  // const [count, setCount] = useState(0)
  const { counter } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  console.log("*****************************", counter);
  return (
    <>
      <h1> count is {counter}</h1>
      <div className="card">
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <button onClick={() => dispatch(incrementBy(2))}>Increment by 2</button>
      </div>
    </>
  );
}

export default App;
