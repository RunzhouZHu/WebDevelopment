const express = require("express");
const app = express();
const blogRouter = require("./routes/blogRouter");
const connectDB = require("./config/db");

connectDB();

// Use the blogRouter for all "/blogs" routes
app.use("/api/blogs", blogRouter);
// Use the userRouter for all "user" routes

module.exports = app;
