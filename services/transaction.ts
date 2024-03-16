import { Transaction } from "../domain/transaction";
import { TransactionRepository } from "../ports/transaction";

export class TransactionService {
  private repository: TransactionRepository;

  constructor(repo: TransactionRepository) {
    this.repository = repo;
  }

  async Create(transaction: Transaction): Promise<Transaction | undefined> {
    return await this.repository.Create(transaction);
  }

  async Get(user_id: number): Promise<Transaction[] | undefined> {
    return await this.repository.Get(user_id);
  }

  async Delete(id: number): Promise<Transaction | undefined> {
    return await this.repository.Delete(id);
  }

  async Update(transaction: Transaction): Promise<Transaction | undefined> {
    return this.repository.Update(transaction);
  }
}
