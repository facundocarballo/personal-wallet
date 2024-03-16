import { Transaction } from "../domain/transaction";

export interface TransactionRepository {
  Create(transaction: Transaction): Promise<Transaction | undefined>;
  Get(user_id: number): Promise<Transaction[] | undefined>;
  Update(transaction: Transaction): Promise<Transaction | undefined>;
  Delete(id: number): Promise<Transaction | undefined>;
}
