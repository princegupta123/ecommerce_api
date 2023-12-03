import { ApolloServer } from "@apollo/server";
import { mutation } from "./user/mutation.js";
import { queries } from "./user/queries.js";
import { query as userQuery, mutations as userMutations } from "./user/resolver.js";
import { typeDef } from "./user/typedef.js";
async function createAppoloGraphQLServer() {
  const gqlServer = new ApolloServer({
    typeDefs: `
      type Query {
    ${queries}
      }

      type Mutation {
        ${mutation}
      }
      `,
    resolvers: {
      Query: {
      ...userQuery
      },
      Mutation: {
        ...userMutations
      },
    },
  });

  await gqlServer.start();
  return gqlServer;
}

export default createAppoloGraphQLServer;
