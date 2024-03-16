import { Currency } from "../../domain/currency";
import { CurrencyRepository } from "../../ports/currency";

export class MySqlCurrencyRepository implements CurrencyRepository {
  async Create(currency: Currency): Promise<Currency | undefined> {
    throw new Error("Method not implemented.");
  }
  async Get(user_id: number): Promise<Currency[] | undefined> {
    throw new Error("Method not implemented.");
  }
  async Delete(id: number): Promise<Currency | undefined> {
    throw new Error("Method not implemented.");
  }
  async Update(currency: Currency): Promise<Currency | undefined> {
    throw new Error("Method not implemented.");
  }
}
