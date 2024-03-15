import express from "express";
import { Create, Delete, Get, Update } from "../controllers/account";

export const AccountsRouter = express.Router();

AccountsRouter.get("/", Get);
AccountsRouter.post("/", Create);
AccountsRouter.put("/", Update);
AccountsRouter.delete("/", Delete);
