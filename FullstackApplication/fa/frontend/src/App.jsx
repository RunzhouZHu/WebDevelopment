import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

// pages and components
import Home from "./pages/HomePage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
