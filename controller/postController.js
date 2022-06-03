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
}

export default new PostController();
