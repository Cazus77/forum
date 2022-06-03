import { Router } from "express";
import PostController from "../controller/postController.js";
import Post from "../models/Post.js";

const router = new Router();

router.get("/", PostController.getAll);

router.post("/create", async (req, res) => {
  try {
    const post = await Post.create(req.body);
    console.log(post);
    res.redirect("/");
  } catch (e) {
    res.render("404");
  }
});

router.get("/create", async (req, res) => {
  res.render("create");
});

export default router;
