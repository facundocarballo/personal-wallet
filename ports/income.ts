import { Income } from "../domain/income";

export interface IncomeRepository {
  Create(transaction: Income): Promise<Income | undefined>;
  Get(user_id: number): Promise<Income[] | undefined>;
  Update(transaction: Income): Promise<Income | undefined>;
  Delete(id: number): Promise<Income | undefined>;
}
