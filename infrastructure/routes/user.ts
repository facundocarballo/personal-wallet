import express from 'express'
import { CreateUser } from '../controllers/user';

export const UserRouter = express.Router();

UserRouter.post("/", CreateUser)