import { Request, Response } from "express";
import { MySqlAccountRepository } from "../../adapters/account/mysql";
import { AccountService } from "../../services/account";

const repository = new MySqlAccountRepository();
const service = new AccountService(repository);

export const Create = async (req: Request, res: Response): Promise<void> => {};

export const Get = async (req: Request, res: Response): Promise<void> => {};

export const Delete = async (req: Request, res: Response): Promise<void> => {};

export const Update = async (req: Request, res: Response): Promise<void> => {};
