import { Link } from "react-router-dom";

export default function BlogListings({ blogs }) {
  return (
    <div className="blog-list">
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>
            <h2>{blog.title}</h2>
          </Link>
          <p>Body: {blog.body}</p>
          <p>Author: {blog.author}</p>
        </div>
      ))}
    </div>
  );
}
