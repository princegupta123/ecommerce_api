import express from "express";
const router = express.Router();
// import { verifyToken, isAdmin } from '../utils/jwtUtils.js';
import { addProduct, updateProduct, deleteProduct } from "../controller/adminController.js";

// import { validateProductSchema } from "../validations/productValidation.js";
import multer from "multer";
import { getAllProduct } from "../controller/userController.js";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}- ${file.originalname}`);
  },
});
const upload = multer({ storage: storage });

router.post("/add-product", upload.array("pImage", 5), addProduct);
router.get("/getAllProduct", getAllProduct);
router.post("/update-product", upload.array("pImage", 5), updateProduct);
router.delete("/delete-product/:productId", deleteProduct);

export default router;
