import express from "express";
import { Create, Delete, Get, Update } from "../controllers/account";
import { CheckJWT } from "../../handlers/jwt";

export const AccountsRouter = express.Router();

AccountsRouter.get("/", CheckJWT, Get);
AccountsRouter.post("/", CheckJWT, Create);
AccountsRouter.put("/", CheckJWT, Update);
AccountsRouter.delete("/", CheckJWT, Delete);
