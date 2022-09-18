const getall = (req, res) => {
  let data = [
    { name: "tunde", id: 1 },
    { name: "emeka", id: 2 },
    { name: "kaka", id: 3 },
    { name: "peter", id: 4 },
  ];

  res.json(data);
};

module.exports = {
  getall,
};
