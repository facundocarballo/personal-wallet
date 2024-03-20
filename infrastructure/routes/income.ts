import express from "express";
import { Create, Delete, Get, Update } from "../controllers/income";
import { CheckJWT } from "../../handlers/jwt";

export const IncomeRouter = express.Router();

IncomeRouter.get("/", CheckJWT, Get);
IncomeRouter.post("/", CheckJWT, Create);
IncomeRouter.put("/", CheckJWT, Update);
IncomeRouter.delete("/", CheckJWT, Delete);
