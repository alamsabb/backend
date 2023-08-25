const otpgen=require('../utils/otpGen');
const user=require('../models/user');
const otpModel=require('../models/otpData');
const sendMail=require('../utils/mailler');



exports.sendotp=async (req,res) =>{
    const{email} =req.query;
    try {
        const User = await user.findOne({email:email});
        console.log(User);
        if(User) {
            let Otp = await otpModel.findOne({ email: email });
            
            if (!Otp) {
                let otpCode = await otpgen.genotp();
                await otpModel.create({
                    email,
                    otp: otpCode
                });
                sendMail.sendMail({
                    email,
                    otp: otpCode
                })
                return res.status(200).json({
                    message: "Otp has been sent to your email."
                })
            }
            else {
                sendMail.sendMail({
                    email,
                    otp: Otp.otp
                })
                return res.status(200).json({
                    message: "Otp has been sent to your email."
                })
            }
        }
        else {
            return res.status(400).json({
                message: "User has not registered."
            })
        }
    }
    catch (error) {
        console.log(error);
        return res.status(400).json({
            message: "some error occured"
        })
    }
}


exports.verifyOtp = async (req, res) => {
    console.log(req.query);
    const { email, otp } = req.query;
    const OtpData = await otpModel.findOne({ email: email });
    let otpnum=Number(otp);
    console.log(typeof otpnum);
    try {
        if (OtpData.otp === otpnum) {
            const User = await user.findOne({ email: email });
            User.EmailVerify = "ACTIVE";
            User.save();
            await otpModel.deleteOne({otp:OtpData.otp})
            return res.status(200).json({
                message: "Your Account is active now."
            })
        }
        else {
            return res.status(401).json({
                message: "Invalid Otp"
            })
        }
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Some error occured!"
        })
    }
};