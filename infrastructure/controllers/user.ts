import { Request, Response } from "express";
import { MySqlUserRepository } from "../../adapters/user/mysql";
import { UserService } from "../../services/user";

const userRepository = new MySqlUserRepository();
const userService = new UserService(userRepository);

export const CreateUser = async (req: Request, res: Response): Promise<void> => {

}

export const GetUser = async (req: Request, res: Response) => {

}