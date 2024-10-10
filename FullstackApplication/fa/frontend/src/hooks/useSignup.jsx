import { useState } from "react";

export default function useSignup(url) {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);

  const signup = async (object) => {
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
      return user;
    } catch (error) {
      console.error(error);
      setError("An error occurred while signing up");
      setIsLoading(false);
      return null;
    }
  };

  return { signup, error };
}
