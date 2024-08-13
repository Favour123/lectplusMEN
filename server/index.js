const express = require("express")
const app = express()
const cors = require("cors")
const dotenv = require("dotenv").config();
const  {router} = require("./Routes/userRoutes");
const { connectDB } = require("./model/db");
const PORT = process.env.PORT || 5000;
connectDB()
app.use(cors(
   {
      origin:(lectplus-menserver.vercel.app),
      method:("POST","GET"),
      credential:true
   }
))
app.use(express.json());
app.listen(PORT, () => {
   console.log(`you are running on ${PORT}`);
});
app.use("/api", router);
