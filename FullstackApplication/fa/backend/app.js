const express = require("express");
const app = express();
const blogRouter = require("./routes/blogRouter");
const userRouter = require("./routes/userRouter");
const connectDB = require("./config/db");

// Middlewares
app.use(express.json());

connectDB();

// Use the blogRouter for all "/blogs" routes
app.use("/api/blogs", blogRouter);

// Use the userRouter for all "user" routes
app.use("/api/users", userRouter);

module.exports = app;
