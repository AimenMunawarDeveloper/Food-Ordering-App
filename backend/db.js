const mongoose = require("mongoose");
const mongoURI = "mongodb+srv://foodHub:foodHub@cluster0.eyuqysf.mongodb.net/";

const mongoDB = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log("connected");
  } catch (error) {
    console.error("Error connecting to MongoDB", error);
  }
};

module.exports = mongoDB;
