import { Request, Response } from "express";
import { MySqlCurrencyRepository } from "../../adapters/currency/mysql";
import { CurrencyService } from "../../services/currency";
import { Currency } from "../../domain/currency";
import ErrorMessages from "../../errors.json";

const repository = new MySqlCurrencyRepository();
const service = new CurrencyService(repository);

export const Create = async (req: Request, res: Response): Promise<void> => {
  let currency = Currency.bodyToCurrency(req.body);
  if (!currency) {
    res.status(400).send(ErrorMessages.currency.post[400]);
    return;
  }

  currency = await service.Create(currency);
  if (!currency) {
    res.status(500).send(ErrorMessages.currency.post[500]);
    return;
  }

  res.status(200).send({
    currency: currency,
  });
};

export const Get = async (req: Request, res: Response): Promise<void> => {
  const user_id = (req as any).user_id;
  if (!user_id) {
    res.status(400).send(ErrorMessages.currency.get[400]);
    return;
  }

  const currencies = await service.Get(user_id);
  if (!currencies) {
    res.status(500).send(ErrorMessages[500]);
    return;
  }

  res.status(200).send({
    currencies: currencies,
  });
};

export const Delete = async (req: Request, res: Response): Promise<void> => {};

export const Update = async (req: Request, res: Response): Promise<void> => {};
