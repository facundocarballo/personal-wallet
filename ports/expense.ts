import { Expense } from "../domain/expense";

export interface ExpenseRepository {
  Create(transaction: Expense): Promise<Expense | undefined>;
  Get(user_id: number): Promise<Expense[] | undefined>;
  Update(transaction: Expense): Promise<Expense | undefined>;
  Delete(id: number): Promise<Expense | undefined>;
}
