import express from "express";
import { Create, Delete, Get, Update } from "../controllers/transaction";
import { CheckJWT } from "../../handlers/jwt";

export const TransactionRouter = express.Router();

TransactionRouter.get("/", CheckJWT, Get);
TransactionRouter.post("/", CheckJWT, Create);
TransactionRouter.put("/", CheckJWT, Update);
TransactionRouter.delete("/", CheckJWT, Delete);
