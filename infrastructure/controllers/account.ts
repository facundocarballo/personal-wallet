import { Request, Response } from "express";
import { MySqlAccountRepository } from "../../adapters/account/mysql";
import { AccountService } from "../../services/account";
import { Account } from "../../domain/account";
import ErrorMessages from "../../errors.json";

const repository = new MySqlAccountRepository();
const service = new AccountService(repository);

export const Create = async (req: Request, res: Response): Promise<void> => {
  const account = Account.bodyToAccount(req.body);
  if (!account) {
    res.status(400).send(ErrorMessages.account.post[400]);
    return;
  }

  const accountCreated = await service.Create(account);
  if (!accountCreated) {
    res.status(500).send(ErrorMessages[500]);
    return;
  }

  res.status(200).send({
    account: accountCreated,
  });
};

export const Get = async (req: Request, res: Response): Promise<void> => {
  const user_id = (req as any).user_id;
  if (!user_id) {
    res.status(400).send(ErrorMessages.category.get[400]);
    return;
  }

  const accounts = await service.Get(user_id);
  if (!accounts) {
    res.status(500).send(ErrorMessages[500]);
    return;
  }

  res.status(200).send({
    accounts: accounts,
  });
};

export const Delete = async (req: Request, res: Response): Promise<void> => {};

export const Update = async (req: Request, res: Response): Promise<void> => {};
