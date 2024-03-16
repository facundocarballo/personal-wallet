import { Currency } from "../domain/currency";

export interface CurrencyRepository {
  Create(currency: Currency): Promise<Currency | undefined>;
  Get(user_id: number): Promise<Currency[] | undefined>;
  Delete(id: number): Promise<Currency | undefined>;
  Update(currency: Currency): Promise<Currency | undefined>;
}
