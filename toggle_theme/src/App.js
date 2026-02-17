import logo from "./logo.svg";
import { useState } from "react";

function App() {
  const [isDark, setIsDark] = useState(true);
  const isDarkStyle = {
    backgroundColor: "#333333",
    color: "#FFFFFF",
  };
  const isLightStyle = {
    backgroundColor: "#FFFFFF",
    color: "#333333",
  };
  const divStyle = isDark ? isDarkStyle : isLightStyle;
  const text = isDark ? "Dark Theme" : "Light Theme";

  return (
    <div style={divStyle}>
      <div>
        <div> {text}</div>
        <button onClick={() => setIsDark(!isDark)}>Toggle Theme</button>
      </div>
    </div>
  );
}

export default App;
