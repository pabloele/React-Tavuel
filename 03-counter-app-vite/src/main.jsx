import React from "react";
import ReactDOM from "react-dom/client";
import CounterApp from "./CounterApp";
// import App from "./HelloWorldApp";
import FirstApp from "./FirstApp";
import "./styles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <FirstApp title="Hola, soy Pablo" subtitle={1234} /> */}
    <CounterApp value={5} />
  </React.StrictMode>
);
