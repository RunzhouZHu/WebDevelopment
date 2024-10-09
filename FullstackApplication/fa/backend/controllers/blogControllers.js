const mongoose = require("mongoose");
const Blog = require("../models/blogModel");

// Get all blogs
const getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find({}).sort({ createdAt: -1 });
    res.status(200).json(blogs);
  } catch (error) {
    console.error("Error fetching blogs:", error);
    res.status(500).json({ error: "Server Error" });
  }
};

// Create a new blog
const createBlog = async (req, res) => {
  try {
    const user_id = req.user._id;
    const newBlog = new Blog({
      ...req.body,
      user_id,
    });
    await newBlog.save();
    res.status(201).json(newBlog);
  } catch (error) {
    console.error("Error creating blog", error);
    res.status(500).json({ error: "Server Error" });
  }
};

// Get blog by ID
const getBlogById = async (req, res) => {
  const { blogId } = req.params;
  if (!mongoose.Types.ObjectId.isValid(blogId)) {
    return res.status(404).json({ error: "No such blog" });
  }

  try {
    const blog = Blog.findById(blogId);
    if (!blog) {
      console.log("Blog not found");
      return res.status(404).json({ message: "Blog not found" });
    }
    res.status(200).json(blog);
  } catch (error) {
    console.error("Error fetching blog:", error);
    res.status(500).json({ error: "Server Error" });
  }
};

// Update blog by ID
const updateBlog = async (req, res) => {
  const { blogId } = req.params;
  if (!mongoose.Types.ObjectId.isValid(blogId)) {
    return res.status(404).json({ error: "No such blog" });
  }

  try {
    // const user_id = req.user._id;
    const blog = await Blog.findOneAndUpdate(
      { _id: blogId },
      { ...req.body },
      { new: true }
    );
    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }
    res.status(200).json(blog);
  } catch (error) {
    console.error("Error updating blog: ", error);
    res.status(500).json({ error: "Server Error" });
  }
};

module.exports = {
  getAllBlogs,
  createBlog,
  getBlogById,
};
