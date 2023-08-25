const mongoose = require('mongoose');

const otpData = mongoose.Schema({
    email:{
        type: String,
        required: true
    },
    otp:{
        type: Number,
        required: true
    }
});

module.exports = mongoose.model("otpData",otpData);