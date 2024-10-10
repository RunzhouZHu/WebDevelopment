import { useContext } from "react";
import useField from "../hooks/useField";
import useLogin from "../hooks/useLogin";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

export default function Login() {
  const navigate = useNavigate();
  const username = useField("text");
  const password = useField("current-password");

  const { login, error } = useLogin("/api/users/login");

  const { isLoggedIn } = useContext(AuthContext);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const userData = await login({
      username: username.value,
      password: password.value,
    });
    if (userData) {
      console.log("loggin success", userData);
      navigate("/");
    } else {
      console.error("Login failed:", error);
    }
  };

  if (!isLoggedIn) {
    return (
      <div className="create">
        <h2>Login</h2>
        <form onSubmit={handleFormSubmit}>
          <label>UserName: </label>
          <input required {...username} />
          <label>Password: </label>
          <input required {...password} />
          <button>Log In</button>
        </form>
      </div>
    );
  }
}
