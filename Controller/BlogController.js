const BlogData = require("../models/BlogModel");

const getallBlog = async (req, res) => {
  try {
    const Blogdata = await BlogData.find();
    res.status(201).json(Blogdata);
  } catch (error) {
    res.status(401).json({ msg: "Data not found" });
  }
};

const Pupulate = (req, res) => {
  const data = new BlogData({
    title: "samheart",
    body: "samheart",
  });
  data
    .save()
    .then((result) => res.json(result))
    .catch((err) => console.log(err));
};

module.exports = {
  getallBlog,
  Pupulate,
};
