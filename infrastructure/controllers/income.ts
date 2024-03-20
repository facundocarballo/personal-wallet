import { Request, Response } from "express";
import { MySqlIncomeRepository } from "../../adapters/income/mysql";
import { IncomeService } from "../../services/income";
import { Income } from "../../domain/income";
import ErrorMessages from "../../errors.json";

const repository = new MySqlIncomeRepository();
const service = new IncomeService(repository);

export const Create = async (req: Request, res: Response): Promise<void> => {
  const income = Income.bodyToIncome(req.body);
  if (!income) {
    res.status(400).send(ErrorMessages.income.post[400]);
    return;
  }

  const incomeCreated = await service.Create(income);
  if (!incomeCreated) {
    res.status(500).send(ErrorMessages[500]);
    return;
  }

  res.status(200).send({
    income: incomeCreated,
  });
};

export const Get = async (req: Request, res: Response): Promise<void> => {
  const user_id = (req as any).user_id;
  if (!user_id) {
    res.status(400).send(ErrorMessages.income.get[400]);
    return;
  }

  const incomes = await service.Get(user_id);
  if (!incomes) {
    res.status(500).send(ErrorMessages[500]);
    return;
  }

  res.status(200).send({
    incomes: incomes,
  });
};

export const Delete = async (req: Request, res: Response): Promise<void> => {};

export const Update = async (req: Request, res: Response): Promise<void> => {};
