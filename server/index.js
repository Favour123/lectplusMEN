const express = require("express")
const app = express()
const cors = require("cors")
const dotenv = require("dotenv").config();
const  {router} = require("./Routes/userRoutes");
const { connectDB } = require("./model/db");
const PORT = process.env.PORT || 5000;
connectDB()
app.use(cors({
   origin: "https://lectplus-men.vercel.app", // Allow your frontend's origin
   methods: ["POST", "GET"], // Specify allowed methods
   credentials: true // If you're sending cookies or auth headers, allow credentials
 }));
 
app.use(express.json());
app.listen(PORT, () => {
   console.log(`you are running on ${PORT}`);
});
app.use("/api", router);
