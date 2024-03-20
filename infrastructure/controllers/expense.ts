import { Request, Response } from "express";
import { MySqlExpenseRepository } from "../../adapters/expense/mysql";
import { ExpenseService } from "../../services/expense";

const repository = new MySqlExpenseRepository();
const service = new ExpenseService(repository);

export const Create = async (req: Request, res: Response): Promise<void> => {};

export const Get = async (req: Request, res: Response): Promise<void> => {};

export const Delete = async (req: Request, res: Response): Promise<void> => {};

export const Update = async (req: Request, res: Response): Promise<void> => {};
