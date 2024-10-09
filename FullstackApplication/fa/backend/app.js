require("dotenv").config();
const express = require("express");
const app = express();
const blogRouter = require("./routes/blogRouter");
const userRouter = require("./routes/userRouter");
const {
  requestLogger,
  unknownEndpoint,
  errorHandler,
} = require("./middleware/customMiddleware");
const connectDB = require("./config/db");

// Middlewares
app.use(express.json());
app.use(requestLogger);

connectDB();

// Use the blogRouter for all "/blogs" routes
app.use("/api/blogs", blogRouter);

// Use the userRouter for all "user" routes
app.use("/api/users", userRouter);

app.use(unknownEndpoint);
app.use(errorHandler);

module.exports = app;
