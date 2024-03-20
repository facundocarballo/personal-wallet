import { Expense } from "../../domain/expense";
import { ExpenseRepository } from "../../ports/expense";

export class MySqlExpenseRepository implements ExpenseRepository {
  Create(transaction: Expense): Promise<Expense | undefined> {
    throw new Error("Method not implemented.");
  }
  Get(user_id: number): Promise<Expense[] | undefined> {
    throw new Error("Method not implemented.");
  }
  Update(transaction: Expense): Promise<Expense | undefined> {
    throw new Error("Method not implemented.");
  }
  Delete(id: number): Promise<Expense | undefined> {
    throw new Error("Method not implemented.");
  }
}
