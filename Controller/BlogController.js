const BlogData = require("../models/BlogModel");

const getall = (req, res) => {
  let data = [
    { name: "tunde", id: 1 },
    { name: "emeka", id: 2 },
    { name: "kaka", id: 3 },
    { name: "peter", id: 4 },
  ];

  res.json(data);
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
  getall,
  Pupulate,
};
