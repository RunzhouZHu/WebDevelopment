const mongoose = require("mongoose");
const Blog = require("../models/blogModel");

// Get all blogs
const getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find({}).sort({ createdAt: -1 });
    res.status(200).json(blogs);
  } catch (error) {
    console.error("Error fetching jobs:", error);
    res.status(500).json({ error: "Server Error" });
  }
};

// Create a new blog
const createBlog = async (req, res) => {
  try {
  } catch (error) {}
};

module.exports = {
  getAllBlogs,
};
