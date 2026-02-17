import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [task, setTask] = useState("");
  const [list, setList] = useState([]);
  function handleOnAdd() {
    if (task.trim() !== "") {
      setList([...list, task]);
      setTask("");
    }
  }
  function handleOnDelete(index) {
    const updatedList = list.filter((_, i) => i !== index);
    setList(updatedList);
  }
  return (
    <div className="App">
      <input
        type="text"
        value={task}
        onChange={(e) => {
          setTask(e.target.value);
        }}
      />
      <button onClick={handleOnAdd}>Add Items</button>
      <ul>
        {list.map((u, index) => (
          <li key={index}>
            {u}
            <button
              onClick={() => {
                handleOnDelete(index);
              }}
            >
              Delete Task
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
