import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <div className="App">
      {data.map((u) => (
        <div key={u.id}>
          {u.name} - {u.email}
        </div>
      ))}
    </div>
  );
}

export default App;
