import { useState, useEffect } from "react";
import { useParams, useNavigate, Form } from "react-router-dom";

export default function EditBlogPage() {
  const [blog, setBlog] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();

  // Declare state variables for form fields
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");

  const user = JSON.parse(localStorage.getItem("user"));
  const token = user ? user.token : null;

  const navigate = useNavigate();

  const updateBlog = async (blog) => {
    try {
      console.log("Updating Blog:", blog);
      const response = await fetch(`/api/blogs/${blog.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(blog),
      });
      if (!response.ok) {
        throw new Error("Failed to update blof");
      }
      return response.ok;
    } catch (error) {
      console.error("Error updating blog:", error);
      return false;
    }
  };

  // Fetch blog data
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch(`/api/blogs/${id}`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setBlog(data);

        // Initializa from fields with fetched blog data
        setTitle(data.title);
        setBody(data.body);
        setAuthor(data.author);
      } catch (error) {
        console.error("Failed to fetch blog:", error);
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBlogs();
  }, [id]);

  // Handle form submission
  const submitForm = async (e) => {
    e.preventDefault();

    const updatedBlog = {
      id,
      title,
      body,
      author,
    };

    const success = await updateBlog(updatedBlog);
    if (success) {
      console.log("Blog Updated Successfully");
      navigate(`/blogs/${id}`);
    } else {
      console.error("Failed to update the blog");
    }
  };

  return (
    <div className="create">
      <h2>Update Blog</h2>
      {isLoading ? (
        <p>Loading</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <form onSubmit={submitForm}>
          <label>Blog Title: </label>
          <input
            type="text"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <label>Blog Body: </label>
          <input
            type="text"
            required
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />

          <label>Blog Author: </label>
          <input
            type="text"
            required
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
          <button>Update Blog</button>
        </form>
      )}
    </div>
  );
}
