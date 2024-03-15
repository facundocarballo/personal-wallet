import express from "express";
import { Create, Login } from "../controllers/user";

export const UserRouter = express.Router();

UserRouter.post("/", Create);
UserRouter.post("/login", Login);
