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
      origin: ["https://lectplus-men.vercel.app"], // Allow your frontend's origin
      methods: ["POST", "GET"], // Specify allowed methods
      credentials: true, // Allow credentials if needed
   })
);

// Preflight request handling for the endpoint
app.options("/post", cors());

// Middleware to parse JSON bodies
app.use(express.json());

// API routes
app.use(router);

// Start the server
app.listen(PORT, () => {
   console.log(`Server is running on port ${PORT}`);
});
