import Post from "../models/Post.js";

class PostController {
  async getAll(req, res) {
    try {
      const posts = await Post.find().lean();
      res.render("index", { posts: posts, title: "Отзывы" });
    } catch (e) {
      res.status(404).render("404");
    }
  }

  async getOne(req, res) {
    try {
      const text = req.params;
      if (!text) {
        res.render("404");
      }

      const post = await Post.findOne(text).lean();
      res.render("post", { post: post });
    } catch (e) {
      res.render("404");
    }
  }

  showCreate(req, res) {
    res.render("create");
  }

  async create(req, res) {
    try {
      const post = await Post.create(req.body);
      res.redirect("/");
    } catch (e) {
      res.render("404");
    }
  }
}

export default new PostController();
