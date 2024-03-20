export class Expense {
  id: number;
  account_id: number;
  category_id: number;
  tag_id: number;
  amount: number;
  timestamp: Date;

  constructor(
    id: number,
    account_id: number,
    category_id: number,
    tag_id: number,
    amount: number,
    timestamp: Date
  ) {
    this.id = id;
    this.account_id = account_id;
    this.category_id = category_id;
    this.tag_id = tag_id;
    this.amount = amount;
    this.timestamp = timestamp;
  }

  static bodyToIncome(body: any): Expense {
    const id = body.id ?? -1;
    const account_id = body.account_id ?? -1;
    const category_id = body.category_id ?? -1;
    const tag_id = body.tag_id ?? -1;
    const amount = body.amount ?? -1;
    const timestamp = body.timestamp ?? "";
    return new Expense(id, account_id, category_id, tag_id, amount, timestamp);
  }

  static anyToArray(results: any[]): Expense[] | undefined {
    const arr: Expense[] = [];
    try {
      results.forEach((res) => {
        arr.push(
          new Expense(
            res.id,
            res.account_id,
            res.category_id,
            res.tag_id,
            res.amount,
            res.timestamp
          )
        );
      });
    } catch (err) {
      console.error("Error formatting the results.");
      return undefined;
    }
    return arr;
  }
}
