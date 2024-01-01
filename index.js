import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import db from "./models/index.js";
import authRoute from "./routes/auth.js";
import adminRoute from "./routes/admin.js";
import userRoute from "./routes/user.js";
dotenv.config();

async function startServer() {
  const app = express();
  app.use(cors());
  app.use(express.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use("/admin", adminRoute);
  app.use("/user", userRoute);
  const PORT = process.env.PORT || 8000;
  app.listen(PORT, () => {
    console.log(`The server is running on ${PORT}`);
  });
}

startServer();

/*
ecommerce-store

1. user
2. admin --> getall vendors, --delete all vendors 
3. vendors --> dashboard --> add product, edit product, delete, get products
*/