import { useState, useEffect } from "react";
import BlogListings from "../components/blogListing";

export default function Home() {
  const [blogs, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch("api/blogs");
        if (!res.ok) {
          throw new Error("could not fetch the date for that resource");
        }
        const data = await res.json();
        setIsPending(false);
        setBlogs(data);
        setError(null);
        // console.log(data);
      } catch (error) {
        setIsPending(false);
        setError(error.message);
      }
    };
    setTimeout(() => {
      fetchBlogs();
    }, 1000);
  });

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading</div>}
      {blogs && <BlogListings blogs={blogs} />}
    </div>
  );
}
