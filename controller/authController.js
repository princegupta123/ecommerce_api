import db from "../models/index.js";
import { getUserByPhoneNumber, otpProcess } from "../utils/utils.js";
const User = db.user;

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
      message: "Error while creating a new user",
      success: false,
      error,
    });
  }
};

export const loginWithMobile = (req, res) => {
  try {
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "Error while creating a new user",
      success: false,
      error,
    });
  }
};
