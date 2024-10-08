// models/Blog.js

const mongoose = require("mongoose");

// Define the blog schema
const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true, // Title is required
    },
    body: {
      type: String,
      required: true, // Body is required
    },
    author: {
      type: String,
      required: true, // Author is required
    },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
  }
);

// Configure JSON output to include virtuals
blogSchema.set("toJSON", {
  virtuals: true,
  transform: (doc, ret) => {
    ret.id = ret._id;
    return ret;
  },
});

// Create and export the Blog model
const Blog = mongoose.model("Blog", blogSchema);
module.exports = Blog;
