import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useSignup } from "../hooks/useSignup";

import { useField } from "../hooks/useField";

const SignupComponent = ({ setIsAuthenticated }) => {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const emailInput = useField("text");
  const passwordInput = useField("password");
  const navigate = useNavigate();

  const { signup, error, isLoading } = useSignup();

  const handleSignup = async () => {
    /*
    try {
      const response = await fetch("/api/users/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const user = await response.json();
        localStorage.setItem("user", JSON.stringify(user));
        console.log("User signed up successfully!");
        setIsAuthenticated(true);
        navigate("/");
      } else {
        console.error("Signup failed", response);
      }
    } catch (error) {
      console.error("Error during signup:", error);
    } */

    await signup(emailInput.value, passwordInput.value);
    navigate("/");
  };

  return (
    <div>
      <h2>Signup</h2>
      <div>
        email: <input {...emailInput} />
      </div>
      <div>
        password: <input {...passwordInput} />
      </div>
      <button onClick={handleSignup} disabled={isLoading}>
        Sign Up
      </button>
      {error && <div className="error">{error}</div>}
    </div>
  );
};

export default SignupComponent;
