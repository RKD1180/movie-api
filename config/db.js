const mongoose = require("mongoose");
const url = process.env.MONGO_URL;

const db = async () => {
  try {
    const con = await mongoose.connect(url);
    console.log("DB connection established");
  } catch (error) {
    console.log(error.message);
  }
};
module.exports = db;
