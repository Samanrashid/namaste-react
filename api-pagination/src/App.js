import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const result = await res.json();
      setData(result);
    }
    fetchData();
  }, []);
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(data.length / itemsPerPage);
  function handleOnPrevious() {
    if (currentPage !== 1) {
      setCurrentPage((prev) => prev - 1);
    }
  }
  function handleOnNext() {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  }
  return (
    <div className="App">
      Saman
      <div>
        {currentItems.map((u) => (
          <p key={u.id}>{u.title}</p>
        ))}
      </div>
      <button onClick={handleOnPrevious}>Previous</button>
      <button onClick={handleOnNext}>Next</button>
    </div>
  );
}

export default App;
