import express from "express";
import { Create, Delete, Get, Update } from "../controllers/category";
import { CheckJWT } from "../../handlers/jwt";

export const CategoryRouter = express.Router();

CategoryRouter.get("/", CheckJWT, Get);
CategoryRouter.post("/", CheckJWT, Create);
CategoryRouter.put("/", CheckJWT, Update);
CategoryRouter.delete("/", CheckJWT, Delete);
