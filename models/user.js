const mongoose=require("mongoose");
const userSchema=new mongoose.Schema({
    Name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    number:{
        type: String,
        required: true
    },
    EmailVerify:{
        type: String,
        required: true
    },
    NumberVerify:{
        type: String,
        required: true
    }
    
   
});
module.exports=mongoose.model("Register",userSchema);