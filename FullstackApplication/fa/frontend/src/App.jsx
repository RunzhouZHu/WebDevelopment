import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

// pages and components
import Home from "./pages/HomePage";
import NavBar from "./components/Navbar";
import AuthProvider from "./Context/AuthContext";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import NotFound from "./pages/NotFoundPage";
import BlogPage from "./pages/BlogPage";
import RouteGuard from "./components/RouteGuard";
import EditBlogPage from "./pages/EditBlogPage";
import AddBlogPage from "./pages/AddBlogPage";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <NavBar />
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/blogs/:id" element={<BlogPage />} />
              <Route
                path="/edit-blog/:id"
                element={
                  <RouteGuard>
                    <EditBlogPage />
                  </RouteGuard>
                }
              />
              <Route
                path="blogs/add-blog"
                element={
                  <RouteGuard>
                    <AddBlogPage />
                  </RouteGuard>
                }
              />
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
