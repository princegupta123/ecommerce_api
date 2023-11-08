import express from 'express';
const router = express.Router();
import {loginWithMobile, generateOtp} from "../controller/authController.js";
import { validateAuth } from '../validations/authValidation.js';
router.use("/send-otp", validateAuth, generateOtp);
router.use("/login", loginWithMobile);

export default router;