import express from "express";
import { Create, Delete, Get, Update } from "../controllers/expense";
import { CheckJWT } from "../../handlers/jwt";

export const ExpenseRouter = express.Router();

ExpenseRouter.get("/", CheckJWT, Get);
ExpenseRouter.post("/", CheckJWT, Create);
ExpenseRouter.put("/", CheckJWT, Update);
ExpenseRouter.delete("/", CheckJWT, Delete);
