import express from "express";
import { UserRouter } from "./routes/user";
import { CurrencyRouter } from "./routes/currency";
import { AccountsRouter } from "./routes/accounts";
import mysql, { Connection, QueryError } from "mysql2";
import { TransactionRouter } from "./routes/transaction";
import { CategoryRouter } from "./routes/category";

export const DatabaseConnection: Connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "12345",
  database: "PersonalWallet",
});

DatabaseConnection.connect((err: QueryError | null) => {
  if (err) {
    console.error("Error connecting to the database. ", err);
    return;
  }
  console.log("Succesfull connection with the database.");
});

const app = express();
const port = 3000;

app.use(express.json());

app.use("/users", UserRouter);
app.use("/currencies", CurrencyRouter);
app.use("/accounts", AccountsRouter);
app.use("/categories", CategoryRouter);
app.use("/transactions", TransactionRouter);

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});

// TODO: Crear Currencies utilizando el JWT.