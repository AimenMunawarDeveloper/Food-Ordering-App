// set up express js here
import productRouter from "./routes/productRoute.js";
import cors from "cors";
import monogoDB from "./db.js";

import express from "express";

const app = express();
const port = 5000; // front end port
monogoDB();
app.use(cors());
app.use("/api/product", productRouter);

app.get("/", (req, res) => {
  res.send("Hello world");
});
app.listen(port, () => console.log("server listening at port 5000"));
// 'nodemon' automatically reflect changes on backend
// use mongoose to create schema in mongodb
