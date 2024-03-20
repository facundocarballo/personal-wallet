import { Request, Response } from "express";
import { MySqlIncomeRepository } from "../../adapters/income/mysql";
import { IncomeService } from "../../services/income";

const repository = new MySqlIncomeRepository();
const service = new IncomeService(repository);

export const Create = async (req: Request, res: Response): Promise<void> => {};

export const Get = async (req: Request, res: Response): Promise<void> => {};

export const Delete = async (req: Request, res: Response): Promise<void> => {};

export const Update = async (req: Request, res: Response): Promise<void> => {};
