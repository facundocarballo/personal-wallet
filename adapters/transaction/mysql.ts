import { Transaction } from "../../domain/transaction";
import { TransactionRepository } from "../../ports/transaction";

export class MySqlTransactionRepository implements TransactionRepository {
  Create(transaction: Transaction): Promise<Transaction | undefined> {
    throw new Error("Method not implemented.");
  }
  Get(user_id: number): Promise<Transaction[] | undefined> {
    throw new Error("Method not implemented.");
  }
  Update(transaction: Transaction): Promise<Transaction | undefined> {
    throw new Error("Method not implemented.");
  }
  Delete(id: number): Promise<Transaction | undefined> {
    throw new Error("Method not implemented.");
  }
}
