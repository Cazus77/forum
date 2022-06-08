import Topic from "../models/Topic.js";

class TopicController {
  async getAll(req, res) {
    try {
      const topics = await Topic.find().lean();
      res.render("index", { topics: topics });
    } catch (e) {
      res.status(404).render("404");
    }
  }

  showCreate(req, res) {
    res.render("create");
  }

  async create(req, res) {
    try {
      const topic = await Topic.create(req.body);
      res.redirect("/");
    } catch (e) {
      res.render("404");
    }
  }
}
export default new TopicController();
