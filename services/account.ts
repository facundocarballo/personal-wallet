import { Account } from "../domain/account";
import { AccountRepository } from "../ports/account";

export class AccountService {
  private repository: AccountRepository;

  constructor(repo: AccountRepository) {
    this.repository = repo;
  }

  async Create(account: Account): Promise<Account | undefined> {
    return await this.repository.Create(account);
  }

  async Get(user_id: number): Promise<Account[] | undefined> {
    return await this.repository.Get(user_id);
  }

  async Delete(id: number): Promise<Account | undefined> {
    return await this.repository.Delete(id);
  }

  async Update(account: Account): Promise<Account | undefined> {
    return this.repository.Update(account);
  }
}
