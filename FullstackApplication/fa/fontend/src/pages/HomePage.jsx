import { useState, useEffect } from "react";

export default function Home() {
  const [blogs, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
      } catch (error) {}
    };
  });

  return (
    <>
      <div className="home">{}</div>
    </>
  );
}
