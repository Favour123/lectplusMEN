const mongoose = require("mongoose");
const formData = new mongoose.Schema({
        fullName:{
                type:String, required:true
        },
        Email:{
                type: String, required:true
        },
        description:{
              type: String, required:true  
        },
        active:{
                type:Boolean, default:true
        }
},
{timestamps: true}
)
const Form = mongoose.model("Form", formData);

module.exports = Form