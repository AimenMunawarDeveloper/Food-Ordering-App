import mongoose from "mongoose";
const mongoURI = "mongodb://127.0.0.1:27017/foodhub";

const mongoDB = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log("connected");
  } catch (error) {
    console.error("Error connecting to MongoDB", error);
  }
};

export default mongoDB;
