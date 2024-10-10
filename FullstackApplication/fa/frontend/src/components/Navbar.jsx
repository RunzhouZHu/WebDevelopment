import { Link } from "react-router-dom";
import AuthContext from "../Context/AuthContext";
import { useContext } from "react";

export default function NavBar() {
  const { isAuthenticated, clearUser, username, isLoading } =
    useContext(AuthContext);

  const handleClick = (e) => {
    clearUser();
  };

  if (isLoading) {
    return <div>Loading</div>;
  }

  return (
    <nav className="navbar">
      <Link to="/">
        <h1>React Blogs</h1>
      </Link>
      <div className="links">
        {isAuthenticated ? (
          <div>
            <Link to="/blogs/add-blog">Add Blog</Link>
            {username && <span>{username}</span>}
            <button onClick={handleClick}>Log out</button>
          </div>
        ) : (
          <div>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
          </div>
        )}
      </div>
    </nav>
  );
}
