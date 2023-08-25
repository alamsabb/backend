const mongoose=require('mongoose');
exports.connectdb=()=>{
    mongoose.connect('')
    .then(()=>{
        console.log("connection successful");
    }).catch((e)=>{
        console.log("no connection");
    })

}

