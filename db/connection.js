const mongoose=require('mongoose');
exports.connectdb=()=>{
    mongoose.connect('mongodb+srv://alam:alam@cluster0.r1g9e7w.mongodb.net/OTP_VALIDATION')
    .then(()=>{
        console.log("connection successful");
    }).catch((e)=>{
        console.log("no connection");
    })

}

