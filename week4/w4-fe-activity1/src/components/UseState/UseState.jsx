import { useState } from "react";
import "./UseState.css";

const UseState = () => {
  const [theme, setTheme] = useState("light");
  let [count, setCount] = useState(0);

  function turnThemeDark() {
    setTheme("dark");
  }

  function turnThemeLight() {
    setTheme("light");
  }

  function toggleTheme() {
    switch (theme) {
      case "light":
        setTheme("dark");
        break;
      default:
        setTheme("light");
    }
  }

  function countIncrement() {
    setCount((prevCount) => prevCount + 1);
  }

  function countDecrement() {
    setCount((prevCount) => prevCount - 1);
  }

  return (
    <div className={`state ${theme}`}>
      <h1>UseState Component</h1>
      <button onClick={turnThemeDark}>Dark</button>
      <button onClick={turnThemeLight}>Light</button>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <h2>DISPLAY COUNT HERE: {count}</h2>
      <button onClick={countIncrement}>Increment</button>
      <button onClick={countDecrement}>Decrement</button>
    </div>
  );
};

export default UseState;
