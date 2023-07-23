import { ApolloServer } from "@apollo/server";
// import express from "express";
import { AppDataSource } from "./db";
import { startStandaloneServer } from "@apollo/server/standalone";
import { Board } from "./Board.postgres";

// const app = express();
// app.use(express.json());

// app.listen(4000, () => {
//   console.log("server running");
// });

// API-DOCS
const typeDefs = `#graphql
  type MyBoard {
    number: Int
    writer: String
    title: String
    contents: String
  }
  
  input CreateBoardInput {
    writer:String
    title:String
    contents:String
  }

  type Query {
    fetchBoards: [MyBoard]
  }
  
  type Mutation {
    # createBoard(writer:String, title:String, contents:String): String
    createBoard(createBoardInput:CreateBoardInput): MyBoard
  }
`;

// API
const resolvers = {
  Query: {
    fetchBoards: async () => {
      const result = await Board.find();
      console.log(result);
      return result;
    },
  },

  Mutation: {
    createBoard: async (parent: any, args: any, context: any, info: any) => {
      console.log({ ...args.createBoardInput });
      const result = await Board.save({
        ...args.createBoardInput,
        // writer: args.createBoardInput.writer,
        // title: args.createBoardInput.title,
        // contents: args.createBoardInput.contents,
      });
      console.log(result);

      return result;
    },
    // updateBoard: async() => {
    //   await Board.update({number: 3}, {writer : "영희"})
    // },
    // deleteBoard: async () => {
    //   await Board.delete({number:3})
    // }
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
