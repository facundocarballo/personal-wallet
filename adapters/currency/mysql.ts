import { Currency } from "../../domain/currency";
import { CurrencyRepository } from "../../ports/currency";
import ErrorMessages from "../../errors.json";
import { DatabaseConnection } from "../../infrastructure/server";
import { FieldPacket, QueryError } from "mysql2";

export class MySqlCurrencyRepository implements CurrencyRepository {
  async Create(currency: Currency): Promise<Currency | undefined> {
    const newCurrencyId = await ExecuteCreateCurrencyStoredProcedure(currency);
    if (!newCurrencyId) return undefined;
    return new Currency(
      newCurrencyId,
      currency.name,
      currency.symbol,
      currency.usd_value,
      currency.user_id
    );
  }
  async Get(user_id: number): Promise<Currency[] | undefined> {
    return await ExecuteGetCurrenciesStoredProcedure(user_id);
  }
  async Delete(id: number): Promise<Currency | undefined> {
    throw new Error("Method not implemented.");
  }
  async Update(currency: Currency): Promise<Currency | undefined> {
    throw new Error("Method not implemented.");
  }
}

async function ExecuteGetCurrenciesStoredProcedure(
  user_id: number
): Promise<Currency[] | undefined> {
  try {
    return await new Promise<Currency[] | undefined>((resolve, reject) => {
      DatabaseConnection.query(
        "CALL GetCurrencies(?)",
        [user_id],
        async (
          err: QueryError | null,
          results: any[],
          fields: FieldPacket[]
        ) => {
          if (err) {
            console.error(ErrorMessages.stored_procedures, err);
            reject(err);
            return undefined;
          }
          resolve(results[0]);
        }
      );
    });
  } catch (error) {
    console.error(ErrorMessages.stored_procedures, error);
    return undefined;
  }
}

async function ExecuteCreateCurrencyStoredProcedure(
  currency: Currency
): Promise<number | undefined> {
  try {
    return await new Promise<number | undefined>((resolve, reject) => {
      DatabaseConnection.query(
        "CALL CreateCurrency(?, ?, ?, ?, @currency_id)",
        [currency.name, currency.symbol, currency.usd_value, currency.user_id],
        async (
          err: QueryError | null,
          results: any[],
          fields: FieldPacket[]
        ) => {
          if (err) {
            console.error(ErrorMessages.stored_procedures, err);
            reject(err);
            return undefined;
          }
          resolve(await FetchNewId());
        }
      );
    });
  } catch (error) {
    console.error(ErrorMessages.stored_procedures, error);
    return undefined;
  }
}

async function FetchNewId(): Promise<number | undefined> {
  return await new Promise<number | undefined>((resolve, reject) => {
    DatabaseConnection.query(
      "SELECT @currency_id AS currency_id",
      (err: QueryError | null, results: any[], fields: FieldPacket[]) => {
        if (err) {
          console.error("Error reading the new currency_id. ", err);
          reject(err);
          return undefined;
        }
        resolve(results[0].currency_id);
      }
    );
  });
}
