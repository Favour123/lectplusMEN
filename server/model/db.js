const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

const connectDB = async () => {
   try {
      await mongoose.connect(process.env.MONGODB_URL);
      console.log("connected to database");
   } catch (error) {
      console.log(`database not connected ${error}`);
   }
};
module.exports = {connectDB}