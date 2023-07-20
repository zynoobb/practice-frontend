import { DataSource } from "typeorm";
import { Board } from "./Board.postgres";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "database",
  port: 5432,
  username: "root",
  password: "root",
  database: "example",
  entities: [Board],
  synchronize: true,
  logging: true,
});
