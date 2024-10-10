import { useState, useEffect } from "react";
import AuthContext from "./AuthContext";

export default function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [token, setToken] = useState(null);
  const [username, setUsername] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Load user data from local storage when the app starts
  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("user"));
    if (userData && userData.token) {
      setIsAuthenticated(true);
      setToken(userData.token);
      setUsername(userData.username);
    }
    setIsLoading(false);
  }, []);

  // Set the user's data after login/signup
  const setUser = (userData) => {
    setIsAuthenticated(true);
    setToken(userData.token);
    setUsername(userData.username);
    localStorage.setItem("user", JSON.stringify(userData));
  };

  // Clear the user's data during logout
  const clearUser = () => {
    setIsAuthenticated(false);
    setToken(null);
    setUsername(null);
    localStorage.removeItem("user");
  };

  // Provide authentication values to all children components
  const authValue = {
    isAuthenticated,
    setIsAuthenticated,
    token,
    username,
    isLoading,
    setUser,
    clearUser,
  };

  return (
    <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>
  );
}
