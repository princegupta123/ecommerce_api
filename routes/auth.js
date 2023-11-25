import express from 'express';
const router = express.Router();
import {verifyOtp, generateOtp} from "../controller/authController.js";
import { validateAuth, validateVerifyOtp } from '../validations/authValidation.js';
import { verifyToken } from '../utils/jwtUtils.js';
router.post("/send-otp", validateAuth, generateOtp);
router.post("/verifyOtp",validateVerifyOtp, verifyOtp);
router.get("/test", verifyToken, (req, res)=>{
    res.send("hello")
})

export default router;