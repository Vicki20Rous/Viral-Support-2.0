const express = require("express");
const router = express.Router();
const db = require("../controllers");
const NewsService = require("../services/news.service");
const api = require("./api");


router.get("/covid19news", function (req, res){
});

router.get("/", (req, res) => {
  res.send({ response: "Server is up and running." }).status(200);
});

module.exports = router;