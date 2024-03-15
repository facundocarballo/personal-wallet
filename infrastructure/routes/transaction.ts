import express from "express";
import { Create, Delete, Get, Update } from "../controllers/transaction";

export const TransactionRouter = express.Router();

TransactionRouter.get("/", Get);
TransactionRouter.post("/", Create);
TransactionRouter.put("/", Update);
TransactionRouter.delete("/", Delete);
