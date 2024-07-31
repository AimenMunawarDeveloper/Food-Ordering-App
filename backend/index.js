// set up express js here
const express = require("express");
const app = express();
const port = 5000; // front end port
const mongoDB = require("./db"); // use require cause working on node js
mongoDB();
app.get("/", (req, res) => {
  res.send("Hello world");
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
// 'nodemon' automatically reflect changes on backend
// use mongoose to create schema in mongodb
