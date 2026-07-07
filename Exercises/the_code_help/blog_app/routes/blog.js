const express = require("express");
const router = express.Router();

const { loginUser, registerUser } = require("./../controllers/userController.js");
const { createPost, deletePost } = require("./../controllers/postController.js");
const { likePost, unLikePost } = require("./../controllers/likeController.js");
const { commentPost, unCommentPost } = require("./../controllers/commentController.js");

// user Registration and Login
router.post("/user/login", loginUser);
router.post("/user/register", registerUser);

// Blog Post
router.post("/posts", createPost);
router.get("/posts", );
router.get("/posts/:id", );
router.put("/posts/:id", );
router.delete("/posts/:id", deletePost);

// Comment to Post
router.post("/post/like", likePost);
router.delete("/post/unlike", unLikePost);

// Like to Post
router.post("/post/comment", commentPost);
router.delete("/post/uncomment", unCommentPost);

module.exports = router;
