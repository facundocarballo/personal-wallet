export class Income {
  id: number;
  account_id: number;
  category_id: number;
  amount: number;
  timestamp: Date;

  constructor(
    id: number,
    account_id: number,
    category_id: number,
    amount: number,
    timestamp: Date
  ) {
    this.id = id;
    this.account_id = account_id;
    this.category_id = category_id;
    this.amount = amount;
    this.timestamp = timestamp;
  }

  static bodyToIncome(body: any): Income {
    const id = body.id ?? -1;
    const account_id = body.account_id ?? -1;
    const category_id = body.category_id ?? -1;
    const amount = body.amount ?? -1;
    const timestamp = body.timestamp ?? "";
    return new Income(id, account_id, category_id, amount, timestamp);
  }

  static anyToArray(results: any[]): Income[] | undefined {
    const arr: Income[] = [];
    try {
      results.forEach((res) => {
        arr.push(
          new Income(
            res.id,
            res.account_id,
            res.category_id,
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
