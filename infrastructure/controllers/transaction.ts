import { Request, Response } from "express";
import { MySqlTransactionRepository } from "../../adapters/transaction/mysql";
import { TransactionService } from "../../services/transaction";

const repository = new MySqlTransactionRepository();
const service = new TransactionService(repository);

export const Create = async (req: Request, res: Response): Promise<void> => {};

export const Get = async (req: Request, res: Response): Promise<void> => {};

export const Delete = async (req: Request, res: Response): Promise<void> => {};

export const Update = async (req: Request, res: Response): Promise<void> => {};
