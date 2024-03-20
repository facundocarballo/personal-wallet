import { Expense } from "../../domain/expense";
import {
  ExecuteCreateMySqlStoredProcedure,
  ExecuteGetMySqlStoredProcedure,
} from "../../handlers/stored_procedures";
import { ExpenseRepository } from "../../ports/expense";

export class MySqlExpenseRepository implements ExpenseRepository {
  async Create(transaction: Expense): Promise<Expense | undefined> {
    const expenseId = await ExecuteCreateMySqlStoredProcedure(
      "CALL CreateExpense(?, ?, ?, ?, @expense_id)",
      "SELECT @expense_id AS new_id",
      [
        transaction.account_id,
        transaction.category_id,
        transaction.tag_id,
        transaction.amount,
      ]
    );
    if (!expenseId) return undefined;
    return new Expense(
      expenseId,
      transaction.account_id,
      transaction.category_id,
      transaction.tag_id,
      transaction.amount,
      transaction.timestamp
    );
  }
  async Get(user_id: number): Promise<Expense[] | undefined> {
    const expenses = await ExecuteGetMySqlStoredProcedure(
      "CALL GetExpenses(?)",
      [user_id]
    );
    if (!expenses) return undefined;
    return Expense.anyToArray(expenses);
  }
  Update(transaction: Expense): Promise<Expense | undefined> {
    throw new Error("Method not implemented.");
  }
  Delete(id: number): Promise<Expense | undefined> {
    throw new Error("Method not implemented.");
  }
}
