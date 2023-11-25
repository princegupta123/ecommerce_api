import db from "../models/index.js";
const User = db.user;
const Otp = db.otp;
import otpGenerator from "otp-generator";

export const getUserByPhoneNumber = async (mobile) => {
  try {
    const user = await User.findOne({
      where: { mobile },
    });
    if (user) return { status: true, error: null, user };
    return { status: false, error: null, user };
  } catch (error) {
    console.log("Error while fetching user details", error);
    return { status: false, error: error };
  }
};

const generateOtp = () => {
 const otp =  otpGenerator.generate(6, {
    upperCaseAlphabets: false,
    lowerCaseAlphabets: false,
    specialChars: false,
  });
  return otp;
};

export const otpProcess = async (req, res) => {
  let userData = await User.upsert(req.body);
  if (userData) {
    const otp = generateOtp();
    console.log("otp", otp)
    console.log("hello");
    let otpData = await Otp.create({ mobile: req.body.mobile, otp: otp });
    console.log("hello 1");
    //send otp to user mobile otpData? code :
    otpData
      ? res.status(200).json({
          message: "Otp Sent Successfully",
          success: true,
          data: { otpData },
        })
      : res.status(500).json({
          message: "Error while Otp Sending",
          success: false,
          error: error,
        });
  }
};
