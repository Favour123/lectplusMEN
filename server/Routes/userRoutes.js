const express = require("express")
const { posted } = require("../controller/User")
const router = express.Router()

router.post("/post", posted)
router.get("/",(req,res)=>{
        res.json({message:"welcome to backend"})
})

module.exports = {
        router
}