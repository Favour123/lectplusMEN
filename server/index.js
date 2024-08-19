const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv").config();
const { router } = require("./Routes/userRoutes");
const { connectDB } = require("./model/db");

const PORT = process.env.PORT || 5000;

// Connect to the database
connectDB();

// CORS middleware
app.use(
   cors({
      origin: ["https://lectplus-men.vercel.app"], 
      methods: ["POST", "GET"], 
      allowedHeaders:["Content-Type", "Authorization"],
      credentials: true, 
   })
);

// Middleware to parse JSON bodies
app.use(express.json());

// API routes
app.use("/api",router);

// Start the server
app.listen(PORT, () => {
   console.log(`Server is running on port ${PORT}`);
});
