import express from "express";
import { getProducts } from "../controllers/productController.js";

const productRouter = express.Router();

productRouter.get("/list", getProducts);

export default productRouter;
