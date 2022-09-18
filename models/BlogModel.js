const express = require("express");
const mongoose = require("mongoose");

const Blogschema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
  },

  { timestamps: true }
);

const BlogData = mongoose.model("BlogData", Blogschema);

module.exports = BlogData;
