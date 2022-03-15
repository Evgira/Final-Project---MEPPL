const express = require("express");
const router = express.Router();
const multer = require("multer");

const { uploadFile } = require("../helpers/multer");
const postSchema = require("../models/Post");

const {
  getPost,
  createPost,
  getAllPosts,
  commentPost,
  //Sorting function added as default to getAllposts route
  getLatest,
  likePost,
  updatePost,
  deletePost,
} = require("../controllers/PostController");

router.get("/", getAllPosts);
router.get("/post/:pid", getPost);
//new
router.patch("/like/:pid/:uid", likePost); // /:uid added by fahim
router.put("/update/:pid", updatePost);
router.post("/comments/:pid/:uid", commentPost);
router.delete("/delete", deletePost);
// router.get("/getLatest", getLatest);

// router.post("/createPost and upload")
router.post("/create/:uid", uploadFile.single("filePath"), createPost);

module.exports = router;
