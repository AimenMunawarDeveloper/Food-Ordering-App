import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  categoryName: { type: String, required: true },
  name: { type: String },
  img: { type: String },
  options: { type: Array },
  description: { type: String },
});
const productModel = mongoose.model("products", productSchema);
export default productModel;
