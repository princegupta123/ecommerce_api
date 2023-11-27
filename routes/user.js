import express from "express";
const router = express.Router();
import { getAllProduct } from "../controller/userController.js";

router.get("/getAllProduct", getAllProduct);

export default router;
