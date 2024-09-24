import React, { useState } from "react";
import useLocalStorage from "./useLocalStorage";
import useUpdateLogger from "./useUpdateLogger";

function App() {
  const [name, setName] = useLocalStorage("name", "");

  useUpdateLogger(name);

  return (
    <input type="test" value={name} onChange={(e) => setName(e.target.value)} />
  );
}

export default App;
