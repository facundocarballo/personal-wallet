import { Request, Response } from "express";
import { MySqlCurrencyRepository } from "../../adapters/currency/mysql";
import { CurrencyService } from "../../services/currency";

const repository = new MySqlCurrencyRepository();
const service = new CurrencyService(repository);

export const Create = async (req: Request, res: Response): Promise<void> => {
  const userId = (req as any).user.id;
  console.log("Creating a currency for User ", userId);
};

export const Get = async (req: Request, res: Response): Promise<void> => {};

export const Delete = async (req: Request, res: Response): Promise<void> => {};

export const Update = async (req: Request, res: Response): Promise<void> => {};
