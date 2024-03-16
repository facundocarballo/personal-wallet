import express from "express";
import { CheckJWT } from "../../handlers/jwt";

export const TagRouter = express.Router();

TagRouter.get("/", CheckJWT);
TagRouter.post("/", CheckJWT);
TagRouter.put("/", CheckJWT);
TagRouter.delete("/", CheckJWT);
