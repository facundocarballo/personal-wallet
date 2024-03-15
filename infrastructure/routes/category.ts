import express from "express";
import { Create, Delete, Get, Update } from "../controllers/category";

export const CategoryRouter = express.Router();

CategoryRouter.get("/", Get);
CategoryRouter.post("/", Create);
CategoryRouter.put("/", Update);
CategoryRouter.delete("/", Delete);
