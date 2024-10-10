import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../Context/AuthContext";

export default function AddBlogPage() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");

  const navigete = useNavigate();

  const addBlog = async (newBlog) => {
    if (!token) {
      console.error("No token found. User is not authenticated.");
      return false;
    }

    try {
      console.log("Adding blog:", newBlog);
      console.log("token", token);
      const response = await fetch("/api/blogs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(newBlog),
      });
      if (!response.ok) {
        throw new Error("Failed to adding Blog");
      }
      return true;
    } catch (error) {
      console.error("Error adding blog:", error);
      return false;
    }
  };

  const submitForm = async (e) => {
    e.preventDefault();

    const newBlog = {
      title,
      body,
      author,
    };

    const success = await addBlog(newBlog);
    console.log(success);
    if (success) {
      console.log("Blog Added Successfully");
      navigete("/");
    } else {
      console.error("Failed to add the blog");
    }
  };

  if (!token) {
    return <div>You are nor authorized to add a blog.</div>;
  }

  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      <form onSubmit={submitForm}>
        <label>Blog Title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label>Blog Body:</label>
        <input
          type="text"
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />

        <label>Blog Author:</label>
        <input
          type="text"
          required
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <button type="submit">Add Blog</button>
      </form>
    </div>
  );
}
