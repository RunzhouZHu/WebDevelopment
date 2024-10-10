import { useParams, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthContext";

export default function BlogPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const { isLoggedIn } = useContext(AuthContext);

  const user = JSON.parse(localStorage.getItem("user"));
  const token = user ? user.token : null;

  const deleteBlog = async (id) => {
    try {
      const response = await fetch(`/api/blogs/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Failed to delete blog: ${errorText}`);
      }
      console.log("Blog deleted successfully");
      navigate("/");
    } catch (error) {
      console.error("Error deleting blog", error);
    }
  };

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch(`/api/blogs/${id}`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setBlog(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBlogs();
  }, [id]);

  const onDeleteClick = (blogId) => {
    const confirm = window.confirm(
      "Are you sure you want to delete this listing?" + blogId
    );
    if (!confirm) return;

    deleteBlog(blogId);
  };

  return (
    <div className="blog-preview">
      {isLoading ? (
        <p>Loading</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <>
          <h2>{blog.title}</h2>
          <p>Body: {blog.body}</p>
          <p>Author: {blog.author}</p>

          {isLoggedIn && (
            <>
              <button onClick={() => onDeleteClick(blog._id)}>delete</button>
              <button onClick={() => navigate(`/edit-blog/${blog._id}`)}>
                edit
              </button>
            </>
          )}
        </>
      )}
    </div>
  );
}
