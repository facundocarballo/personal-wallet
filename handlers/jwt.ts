import jwt from "jsonwebtoken";
import { User } from "../domain/user";
import { NextFunction, Request, Response } from "express";
import ErrorMessages from "../errors.json";

const SECRET_KEY = "Facundo_Carballo"; // Set this on env file

export const GenerateJWT = (user: User): string => {
  const payload = {
    id: user.id,
  };
  return jwt.sign(payload, SECRET_KEY);
};

export const CheckJWT = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers["authorization"];
  if (!authHeader) {
    return res.status(401).send(ErrorMessages.jwt.miss);
  }

  const [bareer, token] = authHeader.split(" ");
  if (bareer !== "Bearer" || !token) {
    return res.status(401).send(ErrorMessages.jwt.not_correct);
  }

  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    (req as any).user = decoded;
    next();
  } catch (err) {
    res.status(403).send(ErrorMessages.jwt.invalid);
  }
};
