import { createContext, useState, useContext, useEffect } from "react";

export const AuthContext = createContext();

export default function AuthProvider(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState(null);

  useEffect(() => {
    const storedJwt = localStorage.getItem("user");
    if (storedJwt) {
      setIsLoggedIn(true);
      setToken(storedJwt.token);
    }
  }, []);

  const logout = () => {
    setIsLoggedIn(false);
    setToken(null);
    localStorage.removeItem("user");
  };

  const value = {
    isLoggedIn,
    setIsLoggedIn,
    token,
    logout,
  };

  return <AuthContext.Provider value={value} {...props} />;
}
