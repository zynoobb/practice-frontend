import express from "express";
import { Board } from "./src/Board.postgres";
import { AppDataSource } from "./src/db";

const app = express();
app.use(express.json());

app.listen(4000, () => {
  console.log("server running");
});
app.get("/", (req, res) => {
  res.send("get");
});

app.post("/test", async (req, res) => {
  const input = req.body;

  const result = await Board.create({
    ...input,
  });

  res.send(result);
});

AppDataSource.initialize()
  .then(() => {
    console.log("DB접속 성공");
  })
  .catch((error) => {
    console.log("DB접속 실패");
    console.log("error", error);
  });
