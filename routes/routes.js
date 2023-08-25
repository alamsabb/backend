const express=require("express");
const app=express();


//resgister function
const adduser=require("../controller/registeruser")

//otp function
const otpController=require("../controller/otpControleer");


app.get("/health",(req,res)=>{
    return res.send("app is healty and running fine")
});



app.post("/register",adduser.AdduserData);  //user register but not varified

app.post("/sendotp",otpController.sendotp);  //send the otp 
app.post("/verifyotp",otpController.verifyOtp);  //send the otp 



module.exports=app;