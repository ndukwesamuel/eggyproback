const express = require("express");

const router = express.Router();

const { getall, Pupulate } = require("../Controller/BlogController");

// router.get("/", getall);
router.get("/", Pupulate);

module.exports = router;
