const express = require("express");
//import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send({
    NodeApp: "Hey Shweta, I love you :)"
  });
});
// to get dynamic port Heroku
const PORT = process.env.PORT || 5000;

app.listen(PORT);
