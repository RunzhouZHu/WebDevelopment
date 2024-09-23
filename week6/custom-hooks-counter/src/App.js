// App.js
import SingleCounter from "./SingleCounter"; // Import the SingleCounter component
import "./App.css"; // Import styles for the app

import AppWithCustomHook from "./AppWithCustomHook";

import useLocalStorage from "./useLocalStorage";

const App = () => {
  const [name, setName] = useLocalStorage("name", "");

  return (
    <>
      <div className="app-container">
        <SingleCounter />
        <SingleCounter />
        <SingleCounter />
      </div>

      <div>
        <AppWithCustomHook />
      </div>

      <div>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <p>Your name is stored in localStorage: {name}</p>
      </div>
    </>
  );
};

export default App;
