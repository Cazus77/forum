import { Router } from "express";
import PostController from "../controller/postController.js";
import TopicController from "../controller/topicController.js";

const router = new Router();

//router.get("/", PostController.getAll);
router.get("/", TopicController.getAll);
router.get("/create", TopicController.showCreate);
router.post("/create", TopicController.create);

router.get("/:topic", PostController.getAll);

//router.post("/topic", PostController.create);

//router.post("/posts:text", PostController.create);

export default router;
