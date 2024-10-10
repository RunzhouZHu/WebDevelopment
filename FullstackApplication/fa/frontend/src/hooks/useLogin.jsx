import { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthContext";

export default function useLogin(url) {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { setIsLoggedIn } = useContext(AuthContext);

  const login = async (object) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(object),
      });
      const user = await response.json();

      if (!response.ok) {
        setError(user.error);
        return null;
      }

      localStorage.setItem("user", JSON.stringify(user));
      setIsLoading(false);
      setIsLoggedIn(true);
    } catch (error) {
      setError("An error occurred while loggin in.");
      setIsLoading(false);
      return null;
    }
  };

  return { login, error };
}
