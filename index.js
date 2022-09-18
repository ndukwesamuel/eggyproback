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

// app.get("/", (req, res) => {
//   let data = [
//     { name: "tunde", id: 1 },
//     { name: "emeka", id: 2 },
//     { name: "kaka", id: 3 },
//     { name: "peter", id: 4 },
//   ];

//   res.json(data);
// });

app.use("/api/blog/v1", BlogrRoutes);
app.listen(port, () => {
  console.log(`Backend server is running! ${port}`);
});
