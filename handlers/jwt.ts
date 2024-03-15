import jwt from "jsonwebtoken";
import { User } from "../domain/user";

const SECRET_KEY = "Facundo_Carballo";

export const GenerateJWT = (user: User): string => {
  const payload = {
    id: user.id,
    email: user.email,
    password: user.password,
  };
  return jwt.sign(payload, SECRET_KEY);
};
