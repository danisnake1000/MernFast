import Posts from "../models/Posts.js";
import { uploadImage, deleteImage } from "../libs/cluodinary.js";
import fs from "fs-extra";

export const getPosts = async (req, res) => {
  try {
    const posts = await Posts.find();
    res.send(posts);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createPosts = async (req, res) => {
  try {
    const { title, description } = req.body;
    let image;
    if (req.files.image) {
      const result = await uploadImage(req.files.image.tempFilePath);
      image = {
        url: result.secure_url,
        public_id: result.public_id,
      };
      await fs.remove(req.files.image.tempFilePath);
      console.log(result);
    }
    const post = new Posts({ title, description, image });
    await post.save();
    return res.json(post);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
};

export const getPostsId = async (req, res) => {
  try {
    const post = await Posts.findById(req.params.id);
    if (!post) {
      return res.sendStatus(404);
    }
    return res.json(post);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updatePosts = async (req, res) => {
  try {
    const updatedPost = await Posts.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    return res.json(updatePosts);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deletePosts = async (req, res) => {
  try {
    const postRemoved = await Posts.findByIdAndDelete(req.params.id);
    if (!postRemoved) return res.send("nada eliminado");
    if (postRemoved.image.public_id) {
      await deleteImage(postRemoved.image.public_id);
    }
    return res.json(postRemoved);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
