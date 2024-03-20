import { Income } from "../../domain/income";
import { IncomeRepository } from "../../ports/income";

export class MySqlIncomeRepository implements IncomeRepository {
  Create(transaction: Income): Promise<Income | undefined> {
    throw new Error("Method not implemented.");
  }
  Get(user_id: number): Promise<Income[] | undefined> {
    throw new Error("Method not implemented.");
  }
  Update(transaction: Income): Promise<Income | undefined> {
    throw new Error("Method not implemented.");
  }
  Delete(id: number): Promise<Income | undefined> {
    throw new Error("Method not implemented.");
  }
}
