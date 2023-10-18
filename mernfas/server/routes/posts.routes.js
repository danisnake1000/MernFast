import { Router } from "express";
import {
  getPosts,
  deletePosts,
  updatePosts,
  createPosts,
  getPostsId,
} from "../controllers/posts.controllers.js";
export const router = Router();

router.post("/posts", createPosts);

router.get("/posts", getPosts);

router.get("/posts/:id",getPostsId);

router.put("/posts/:id", updatePosts);

router.delete("/posts/:id",deletePosts);
