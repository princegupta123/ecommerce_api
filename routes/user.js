import express from "express";
const router = express.Router();
import { getAllProduct, addToCart,getCart,deleteCartItem } from "../controller/userController.js";

router.get("/getAllProduct", getAllProduct);
router.post("/add-to-cart", addToCart);
router.get("/getCartItems", getCart);
router.delete("/deleteCartItem/:productId", deleteCartItem);

export default router;
