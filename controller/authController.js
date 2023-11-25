import db from "../models/index.js";
import { getUserByPhoneNumber, otpProcess } from "../utils/utils.js";
import { sign } from "../utils/jwtUtils.js";
const User = db.user;
const Otp = db.otp;

export const generateOtp = async (req, res) => {
  try {
    const { mobile } = req.body;
    if ((await getUserByPhoneNumber(mobile)).status) {
      otpProcess(req, res);
    }
    otpProcess(req, res);
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "Error while sending otp",
      success: false,
      error,
    });
  }
};

export const verifyOtp = async (req, res) => {
  try {
    const { mobile, otp } = req.body;
    let userData = await getUserByPhoneNumber(mobile);
    console.log(userData)
    let entry = await Otp.findOne({
      where: { mobile },
    });

    if(entry){
      if([entry.otp].indexOf(otp) !== -1){
        let token =  sign({userData});
        return res.status(200).json({
          success : true,
          message : 'Otp verified successfully',
          data: {entry, token}
        })
      }
      else{
        return res.status(404).json({
          success : false,
          message : 'Wrong Otp',
          data: null
        })
      }
    }
   else{
    return res.status(401).json({
      success : false,
      message : 'Wrong Phone number',
      data: null
    })
   }
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "Error while verifying Otp",
      success: false,
      error,
    });
  }
};
