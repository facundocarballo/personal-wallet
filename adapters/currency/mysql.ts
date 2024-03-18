import { Currency } from "../../domain/currency";
import { CurrencyRepository } from "../../ports/currency";
import {
  ExecuteCreateMySqlStoredProcedure,
  ExecuteGetMySqlStoredProcedure,
} from "../../handlers/stored_procedures";

export class MySqlCurrencyRepository implements CurrencyRepository {
  async Create(currency: Currency): Promise<Currency | undefined> {
    const currencyId = await ExecuteCreateMySqlStoredProcedure(
      "CALL CreateCurrency(?, ?, ?, ?, @currency_id)",
      "SELECT @currency_id AS new_id",
      [currency.name, currency.symbol, currency.usd_value, currency.user_id]
    );
    if (!currencyId) return undefined;
    return new Currency(
      currencyId,
      currency.name,
      currency.symbol,
      currency.usd_value,
      currency.user_id
    );
  }
  async Get(user_id: number): Promise<Currency[] | undefined> {
    const currencies = await ExecuteGetMySqlStoredProcedure(
      "CALL GetCurrencies(?)",
      [user_id]
    );
    if (!currencies) return undefined;
    return Currency.anyToArray(currencies);
  }
  async Delete(id: number): Promise<Currency | undefined> {
    throw new Error("Method not implemented.");
  }
  async Update(currency: Currency): Promise<Currency | undefined> {
    throw new Error("Method not implemented.");
  }
}
