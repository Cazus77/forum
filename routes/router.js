import { Router } from "express";
import PostController from "../controller/postController.js";

const router = new Router();

router.get("/", PostController.getAll);
router.get("/posts:text", PostController.getOne);
router.get("/create", PostController.showCreate);
router.post("/create", PostController.create);

export default router;
