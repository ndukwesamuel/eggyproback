const express = require("express");

const router = express.Router();

const {
  getallBlog,
  Pupulate,
  getSingleData,
  CreateData,
  UpdateData,
  Deletedata,
} = require("../Controller/BlogController");

router.get("/", getallBlog);
router.post("/", CreateData);

router.get("/:id", getSingleData);
router.patch("/:id", UpdateData);
router.delete("/:id", Deletedata);

// router.get("/", Pupulate);

module.exports = router;
