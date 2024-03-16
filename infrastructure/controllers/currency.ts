import { Request, Response } from "express";

export const Create = async (req: Request, res: Response): Promise<void> => {
  const userId = (req as any).user.id;
  console.log("Creating a currency for User ", userId);
};

export const Get = async (req: Request, res: Response): Promise<void> => {};

export const Delete = async (req: Request, res: Response): Promise<void> => {};

export const Update = async (req: Request, res: Response): Promise<void> => {};
