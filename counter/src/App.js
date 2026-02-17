import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  function handleOnIncrement() {
    if (count < 10) {
      setCount((prev) => prev + 1);
    }
  }
  function handleOnDecrement() {
    if (count !== 0) {
      setCount((prev) => prev - 1);
    }
  }
  return (
    <div className="App">
      <div>Count is : {count}</div>
      {count === 10 && <div>limit exceed to max</div>}
      <button onClick={handleOnIncrement}>Increment</button>
      <button onClick={handleOnDecrement} disabled={count === 0}>
        Decrement
      </button>
    </div>
  );
}

export default App;
