const express = require("express");

const router = express.Router();

const { getall } = require("../Controller/BlogController");

router.get("/", getall);

module.exports = router;
