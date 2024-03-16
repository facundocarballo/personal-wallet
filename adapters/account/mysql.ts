import { Account } from "../../domain/account";
import { AccountRepository } from "../../ports/account";

export class MySqlAccountRepository implements AccountRepository {
  Create(account: Account): Promise<Account | undefined> {
    throw new Error("Method not implemented.");
  }
  Get(user_id: number): Promise<Account[] | undefined> {
    throw new Error("Method not implemented.");
  }
  Update(account: Account): Promise<Account | undefined> {
    throw new Error("Method not implemented.");
  }
  Delete(id: number): Promise<Account | undefined> {
    throw new Error("Method not implemented.");
  }
}
