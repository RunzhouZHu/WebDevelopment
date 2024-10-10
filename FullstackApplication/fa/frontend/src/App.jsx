import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthProvider from "./Context/AuthProvider";
import RouteGuard from "./components/RouteGuard";

// pages and components
import Home from "./pages/HomePage";
import NavBar from "./components/Navbar";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import NotFound from "./pages/NotFoundPage";
import BlogPage from "./pages/BlogPage";
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
                  <RouteGuard requireAuth={true}>
                    <EditBlogPage />
                  </RouteGuard>
                }
              />
              <Route
                path="blogs/add-blog"
                element={
                  <RouteGuard requireAuth={true}>
                    <AddBlogPage />
                  </RouteGuard>
                }
              />
              <Route
                path="/signup"
                element={
                  <RouteGuard requireAuth={false}>
                    <Signup />
                  </RouteGuard>
                }
              />
              <Route
                path="/login"
                element={
                  <RouteGuard requireAuth={false}>
                    <Login />
                  </RouteGuard>
                }
              />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
