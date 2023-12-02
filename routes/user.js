import express from "express";
const router = express.Router();
import { getAllProduct, addToCart,getCart,deleteCartItem,orderController, getOrders } from "../controller/userController.js";

router.get("/getAllProduct", getAllProduct);
router.post("/add-to-cart", addToCart);
router.get("/getCartItems", getCart);
router.delete("/deleteCartItem/:productId", deleteCartItem);
router.post("/order", orderController);
router.get("/get-orders", getOrders);


export default router;
