import { Income } from "../domain/income";
import { IncomeRepository } from "../ports/income";

export class IncomeService {
  private repository: IncomeRepository;

  constructor(repo: IncomeRepository) {
    this.repository = repo;
  }

  async Create(transaction: Income): Promise<Income | undefined> {
    return await this.repository.Create(transaction);
  }

  async Get(user_id: number): Promise<Income[] | undefined> {
    return await this.repository.Get(user_id);
  }

  async Delete(id: number): Promise<Income | undefined> {
    return await this.repository.Delete(id);
  }

  async Update(transaction: Income): Promise<Income | undefined> {
    return this.repository.Update(transaction);
  }
}
