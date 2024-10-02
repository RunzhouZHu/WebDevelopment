import { createContext, useState, useContext, useEffect } from "react";

export const AuthContext = createContext();

export function AuthProvider(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const storedJwt = localStorage.getItem("jwt");
    if (storedJwt) {
      setIsLoggedIn(true);
      setToken(storedJwt);
    }
    setIsLoading(false);
  }, []);

  const login = (jwtToken) => {
    setIsLoggedIn(true);
    setToken(jwtToken);
    localStorage.setItem("jwt", jwtToken);
  };

  const logout = () => {
    setIsLoggedIn(false);
    setToken(null);
    localStorage.removeItem("jwt");
  };

  const value = {
    isLoggedIn,
    isLoading,
    token,
    login,
    logout,
  };

  return <AuthContext.Provider value={value} {...props} />;
}
