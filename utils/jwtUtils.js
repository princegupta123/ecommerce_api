import Jwt from "jsonwebtoken";
import db from "../models/index.js";
const User = db.user;

export const sign = (user) => {
  let token = Jwt.sign(user, "helloguysmynmeisprincegupta");
  return token;
};

export const verifyToken = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ message: "Token is missing or invalid." });
    }

    const token = authHeader.split("Bearer ")[1];
    const decode = Jwt.verify(token, "helloguysmynmeisprincegupta");
    req.currUser = decode;
    console.log(req.currUser);
    next();
  } catch (error) {
    console.log(error);
  }
};

export const isAdmin = async (req, res, next) => {
  try {
    const user = await User.findOne({
      where: {
        id: req.currUser.id,
      },
    });

    if (user.role !== 1) {
      return res.status(401).send({
        success: false,
        message: "Unauthorize access",
      });
    } else {
      next();
    }
  } catch (error) {
    res.status(401).send({
      success: false,
      message: "Error while admin Access",
      error: error,
    });
  }
};
