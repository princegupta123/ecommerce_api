import express from "express";
const router = express.Router();
// import { verifyToken, isAdmin } from '../utils/jwtUtils.js';
import { addProduct } from "../controller/adminController.js";
import { validateProductSchema } from "../validations/productValidation.js";
import multer from "multer";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}- ${file.originalname}`);
  },
});
const upload = multer({ storage: storage });

router.post(
  "/add-product",
  [validateProductSchema, upload.array("pImage", 5)],
  addProduct
);

export default router;
