import { Income } from "../../domain/income";
import {
  ExecuteCreateMySqlStoredProcedure,
  ExecuteGetMySqlStoredProcedure,
} from "../../handlers/stored_procedures";
import { IncomeRepository } from "../../ports/income";

export class MySqlIncomeRepository implements IncomeRepository {
  async Create(transaction: Income): Promise<Income | undefined> {
    const incomeId = await ExecuteCreateMySqlStoredProcedure(
      "CALL CreateIncome(?, ?, ?, @income_id)",
      "SELECT @income_id AS new_id",
      [transaction.account_id, transaction.category_id, transaction.amount]
    );
    if (!incomeId) return undefined;
    return new Income(
      incomeId,
      transaction.account_id,
      transaction.category_id,
      transaction.amount,
      transaction.timestamp
    );
  }
  async Get(user_id: number): Promise<Income[] | undefined> {
    const incomes = await ExecuteGetMySqlStoredProcedure("CALL GetIncomes(?)", [
      user_id,
    ]);
    if (!incomes) return undefined;
    return Income.anyToArray(incomes);
  }
  Update(transaction: Income): Promise<Income | undefined> {
    throw new Error("Method not implemented.");
  }
  Delete(id: number): Promise<Income | undefined> {
    throw new Error("Method not implemented.");
  }
}
