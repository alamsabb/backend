const mongoose=require('mongoose');
exports.connectdb=()=>{
    mongoose.connect('mongodb://127.0.0.1:27017/otp_valideation')
    .then(()=>{
        console.log("connection successful");
    }).catch((e)=>{
        console.log("no connection");
    })

}

