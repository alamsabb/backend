const register = require("../models/user");


exports.AdduserData = async (req, res) => {
  //fetching the data using postman application
  const { Name, email, number } = req.body;
  // console.log(req.query);
  const mobno = await register.findOne({ number: number });
  const emaliid=await register.findOne({email:email});
  if (!mobno&&!emaliid) {
    try {
      await register.create({
        Name,
        email,
        number,
        EmailVerify: "NOT VERIFIED",
        NumberVerify: "NOT VERIFIED"
      });
    //   console.log(otpGen.genotp());
      return res.status(200).json({
        message: "added success"
      });
    } catch (error) {
      console.log(error);
      return res.status(400).json({
        message: error,
      });
    }
  }else{
    // console.log(otpGen.genotp());
    return res.status(400).json({
        message:"mobile no exist or emailid exist"
    });
  }
};
