const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = process.env.PORT || 5000;

const BlogrRoutes = require("./routes/BlogrRoutes");

const dataUrl =
  "mongodb+srv://techstudioacademy:techstudioacademy@techstudio.anryi.mongodb.net/?retryWrites=true&w=majority";

mongoose
  .connect(dataUrl)
  .then((result) => console.log("connect db"))
  .catch((err) => console.log(err));

app.use(express.json());

app.get("/", (req, res) => {
  const data = [1, 2, 3, 4, 4, 5];

  res.status(200).json(data);
});

app.use("/api/blog/v1", BlogrRoutes);

app.listen(port, () => {
  console.log(`Backend server is running! ${port}`);
});
