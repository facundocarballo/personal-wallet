import { Request, Response } from "express";
import { MySqlUserRepository } from "../../adapters/user/mysql";
import { UserService } from "../../services/user";
import { User } from "../../domain/user";
import ErrorMessages from '../../errors.json';

const userRepository = new MySqlUserRepository();
const userService = new UserService(userRepository);

export const Create = async (req: Request, res: Response): Promise<void> => {
  let user = User.bodyToUser(req.body);
  if (!user) {
    res
      .status(400)
      .send(ErrorMessages.user.post[400]);
    return
  }

  user = await userService.Create(user);
  if (!user) {
    res.status(500).send(ErrorMessages[500])
    return
  }

  res.status(200).send(user);
};

export const Login = async (req: Request, res: Response) => {};
