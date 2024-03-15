import { Request, Response } from "express";
import { MySqlUserRepository } from "../../adapters/user/mysql";
import { UserService } from "../../services/user";
import { User } from "../../domain/user";
import ErrorMessages from "../../errors.json";
import { GenerateJWT } from "../../handlers/jwt";

const userRepository = new MySqlUserRepository();
const userService = new UserService(userRepository);

export const Create = async (req: Request, res: Response): Promise<void> => {
  let user = User.bodyToUser(req.body);
  if (!user) {
    res.status(400).send(ErrorMessages.user.post[400]);
    return;
  }

  user = await userService.Create(user);
  if (!user) {
    res.status(500).send(ErrorMessages[500]);
    return;
  }

  // Add the JWT to the user structure.
  res.status(200).send({
    user: user,
    jwt: GenerateJWT(user),
  });
};

export const Login = async (req: Request, res: Response) => {
  let user = User.bodyToUser(req.body);
  if (!user) {
    res.status(400).send(ErrorMessages.user.post[400]);
    return;
  }

  const realUser = await userService.Get(user.id);
  if (!realUser) {
    res.status(400).send(ErrorMessages.user.post["400"]);
    return;
  }

  if (user.isEqualTo(realUser)) {
    res.status(200).send(GenerateJWT(user));
  } else {
    res
      .status(400)
      .send(
        "The credentials that you provide not match with the original ones."
      );
  }
};
