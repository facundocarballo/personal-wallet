import express from "express";
import { Create, Delete, Get, Update } from "../controllers/currency";

export const CurrencyRouter = express.Router();

CurrencyRouter.get("/", Get);
CurrencyRouter.post("/", Create);
CurrencyRouter.put("/", Update);
CurrencyRouter.delete("/", Delete);
