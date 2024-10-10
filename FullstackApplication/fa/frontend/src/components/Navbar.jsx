import { Link } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import { useContext } from "react";

export default function NavBar() {
  const { isLoggedIn, logout } = useContext(AuthContext);

  return (
    <nav className="navbar">
      <Link to="/">
        <h1>React Blogs</h1>
      </Link>
      <div className="links">
        {isLoggedIn && (
          <div>
            <Link to="/blogs/add-blog">Add Blog</Link>
            <span>{JSON.parse(localStorage.getItem("user")).username}</span>
            <button onClick={logout}>Log out</button>
          </div>
        )}
        {!isLoggedIn && (
          <div>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
          </div>
        )}
      </div>
    </nav>
  );
}
