import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [words, setWords] = useState("");
  const normalColor = {
    color: "#333333",
  };
  const redColor = {
    color: "#ea0404",
  };

  return (
    <div className="App">
      <input
        placeholder="enter task"
        value={words}
        maxLength={20}
        onChange={(e) => {
          setWords(e.target.value);
        }}
      />
      <p style={words.length < 20 ? normalColor : redColor}>
        the length is: {words.length}
      </p>
    </div>
  );
}

export default App;
