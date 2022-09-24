const express = require("express");

const router = express.Router();

const { getallBlog, Pupulate } = require("../Controller/BlogController");

router.get("/", getallBlog);
// router.get("/", Pupulate);

module.exports = router;
