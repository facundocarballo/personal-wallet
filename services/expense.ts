import { Expense } from "../domain/expense";
import { ExpenseRepository } from "../ports/expense";

export class ExpenseService {
  private repository: ExpenseRepository;

  constructor(repo: ExpenseRepository) {
    this.repository = repo;
  }

  async Create(transaction: Expense): Promise<Expense | undefined> {
    return await this.repository.Create(transaction);
  }

  async Get(user_id: number): Promise<Expense[] | undefined> {
    return await this.repository.Get(user_id);
  }

  async Delete(id: number): Promise<Expense | undefined> {
    return await this.repository.Delete(id);
  }

  async Update(transaction: Expense): Promise<Expense | undefined> {
    return this.repository.Update(transaction);
  }
}
