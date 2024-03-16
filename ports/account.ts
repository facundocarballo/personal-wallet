import { Account } from "../domain/account";

export interface AccountRepository {
  Create(account: Account): Promise<Account | undefined>;
  Get(user_id: number): Promise<Account[] | undefined>;
  Update(account: Account): Promise<Account | undefined>;
  Delete(id: number): Promise<Account | undefined>;
}
