import { Account } from "../../domain/account";
import {
  ExecuteCreateMySqlStoredProcedure,
  ExecuteGetMySqlStoredProcedure,
} from "../../handlers/stored_procedures";
import { AccountRepository } from "../../ports/account";

export class MySqlAccountRepository implements AccountRepository {
  async Create(account: Account): Promise<Account | undefined> {
    const accountId = await ExecuteCreateMySqlStoredProcedure(
      "CALL CreateAccount(?, ?, @account_id)",
      "SELECT @account_id AS new_id",
      [account.name, account.currency_id]
    );
    if (!accountId) return undefined;
    return new Account(accountId, account.name, account.currency_id);
  }
  async Get(user_id: number): Promise<Account[] | undefined> {
    const results = await ExecuteGetMySqlStoredProcedure(
      "CALL GetAccounts(?)",
      [user_id]
    );
    if (!results) return undefined;
    return Account.anyToArray(results);
  }
  Update(account: Account): Promise<Account | undefined> {
    throw new Error("Method not implemented.");
  }
  Delete(id: number): Promise<Account | undefined> {
    throw new Error("Method not implemented.");
  }
}
