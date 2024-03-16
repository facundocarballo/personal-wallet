import express from "express";
import { CheckJWT } from "../../handlers/jwt";
import { Create, Delete, Get, Update } from "../controllers/tag";

export const TagRouter = express.Router();

TagRouter.get("/", CheckJWT, Get);
TagRouter.post("/", CheckJWT, Create);
TagRouter.put("/", CheckJWT, Update);
TagRouter.delete("/", CheckJWT, Delete);
