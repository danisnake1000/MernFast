import Posts from "../models/Posts.js";

export const getPosts = async (req, res) => {
  const posts = await Posts.find();
  res.send(posts);
};

export const createPosts = async (req, res) => {
  const { title, description } = req.body;
  const post = new Posts({ title, description });
  await post.save();
  return res.json(post);
};

export const getPostsId = async (req, res) => {};

export const updatePosts = async (req, res) => {
  const post = await Posts.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  return res.json(post);
};

export const deletePosts = async (req, res) => {
    const postRemoved = await Posts.findByIdAndDelete(req.params.id)
    if(!postRemoved) return res.send("nada eliminado")
    return res.json(postRemoved);
};
