import { Request, Response } from "express";
import { MySqlExpenseRepository } from "../../adapters/expense/mysql";
import { ExpenseService } from "../../services/expense";
import { Expense } from "../../domain/expense";
import ErrorMessages from "../../errors.json";

const repository = new MySqlExpenseRepository();
const service = new ExpenseService(repository);

export const Create = async (req: Request, res: Response): Promise<void> => {
  const expense = Expense.bodyToIncome(req.body);
  if (!expense) {
    res.status(400).send(ErrorMessages.income.post[400]);
    return;
  }

  const expenseCreated = await service.Create(expense);
  if (!expenseCreated) {
    res.status(500).send(ErrorMessages[500]);
    return;
  }

  res.status(200).send({
    income: expenseCreated,
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
