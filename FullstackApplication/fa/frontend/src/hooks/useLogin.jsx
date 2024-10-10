import { useState } from "react";
import { useAuth } from "./useAuth";

export default function useLogin(url) {
  const [error, setError] = useState(null);
  const { setUser } = useAuth();
  const [isLoading, setIsLoading] = useState(false);

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

      setUser(user);

      setIsLoading(false);
      return user;
    } catch (error) {
      setError("An error occurred while loggin in.");
      setIsLoading(false);
      return null;
    }
  };

  return { login, error };
}
