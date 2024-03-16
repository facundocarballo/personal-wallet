import express from "express";
import { Create, Delete, Get, Update } from "../controllers/currency";
import { CheckJWT } from "../../handlers/jwt";

export const CurrencyRouter = express.Router();

CurrencyRouter.get("/", CheckJWT, Get);
CurrencyRouter.post("/", CheckJWT, Create);
CurrencyRouter.put("/", CheckJWT, Update);
CurrencyRouter.delete("/", CheckJWT, Delete);
