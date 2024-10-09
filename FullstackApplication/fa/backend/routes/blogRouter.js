const express = require("express");
const {
  getAllBlogs,
  createBlog,
  getBlogById,
} = require("../controllers/blogControllers");
const requireAuth = require("../middleware/requireAuth");

const router = express.Router();

router.get("/", getAllBlogs);
router.get("/:blogId", getBlogById);

router.use(requireAuth);

router.post("/", createBlog);

module.exports = router;
