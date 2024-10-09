import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

// pages and components
import Home from "./pages/HomePage";
import NavBar from "./components/Navbar";
import AuthProvider from "./Context/AuthContext";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <NavBar />
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </div>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
