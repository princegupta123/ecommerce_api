import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
// import db from "./models/index.js";
// import authRoute from "./routes/auth.js";
// import adminRoute from "./routes/admin.js";
// import userRoute from "./routes/user.js";
dotenv.config();

async function startServer() {
  const app = express();
  app.use(cors());
  app.use(express.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  const server = new ApolloServer({
    typeDefs: `
    type User{
      id: ID!,
      mobile: String!,
      otp: String!
    },
    type Query {
      hello: String
    }
    type Mutation {
      createUser(mobile: String!, otp: String!): User
    },
    
    `,
    resolvers: {
      Query: {
        hello: () => 'Hello, GraphQL!',
      },
      Mutation :{
        createUser: (_, { mobile, otp }) =>{
          const user = {
            id: '1',
            mobile,
            otp
          };
          return user;
        }
      }
    },
  });
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
