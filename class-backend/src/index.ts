import { ApolloServer } from "@apollo/server";
// import express from "express";
import { AppDataSource } from "./db";
import { startStandaloneServer } from "@apollo/server/standalone";

// const app = express();
// app.use(express.json());

// app.listen(4000, () => {
//   console.log("server running");
// });

// API-DOCS
const typeDefs = `#graphql
  type Query {
    hello:String
  }
`;

// API
const resolvers = {
  Query: {
    hello: () => "world",
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

AppDataSource.initialize()
  .then(() => {
    console.log("DB접속 성공");
    startStandaloneServer(server).then(() => {
      console.log("graphql 서버 실행");
    });
  })
  .catch((error) => {
    console.log("DB접속 실패");
    console.log("error", error);
  });
