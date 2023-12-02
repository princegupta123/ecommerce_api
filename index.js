import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import db from "./models/index.js";
import authRoute from "./routes/auth.js";
import adminRoute from "./routes/admin.js";
import userRoute from "./routes/user.js";
dotenv.config();

async function startServer() {
  const app = express();
  const server = new ApolloServer({
    typeDefs: "",
    resolvers :{}
  });

  app.use(cors());
  app.use(express.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  await server.start();
  app.use("/graphql", expressMiddleware(server));
  // app.use("/auth", authRoute);
  // app.use("/admin", adminRoute);
  // app.use("/user", userRoute);

  const PORT = process.env.PORT || 8000;
  app.listen(PORT, () => {
    console.log(`The server is running on ${PORT}`);
  });
}

startServer();
