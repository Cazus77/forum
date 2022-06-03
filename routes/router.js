import { Router } from "express";
import PostController from "../controller/postController.js";

const router = new Router();

router.get("/", PostController.getAll);

router.post("/create", PostController.create);

router.get("/create", PostController.showCreate);

export default router;
