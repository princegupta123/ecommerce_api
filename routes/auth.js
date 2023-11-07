import express from 'express';
const router = express.Router();
import {loginWithMobile, registerWithMobile} from "../controller/authController.js";
import { authSchema } from '../validations/authValidation.js';
router.use("/register", authSchema, registerWithMobile);
router.use("/login", loginWithMobile);

export default router;