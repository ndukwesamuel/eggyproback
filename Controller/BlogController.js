const BlogData = require("../models/BlogModel");

const getallBlog = async (req, res) => {
  try {
    const Blogdata = await BlogData.find();
    res.status(201).json(Blogdata);
  } catch (error) {
    res.status(401).json({ msg: "Data not found" });
  }
};

const getSingleData = async (req, res) => {
  const { id } = req.params;
  try {
    const Blogdata = await BlogData.findById(id);
    res.status(201).json(Blogdata);
  } catch (error) {
    res.status(404).json({ msg: "Data not found" });
  }
};

const CreateData = async (req, res) => {
  const { title, body } = req.body;

  try {
    const data = await BlogData.create({
      title,
      body,
    });
    res.status(201).json(data);
  } catch (error) {
    res.status(400).json({ msg: "Data not created" });
  }
};

const UpdateData = async (req, res) => {
  const { id } = req.params;
  try {
    const oldData = await BlogData.findById(id);

    const Updateblog = await BlogData.findByIdAndUpdate(oldData, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(201).json(Updateblog);
  } catch (error) {
    res.status(500).json({ msg: "Blog not found" });
  }
};

const Deletedata = async (req, res) => {
  const { id } = req.params;
  try {
    const Deletblog = await BlogData.findByIdAndDelete(id);
    res.status(201).json({ msg: "Deleted Successfully", data: Deletblog });
  } catch (error) {
    res.status(500).json({ msg: error });
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
  getSingleData,
  CreateData,
  UpdateData,
  Deletedata,
};
