export class Transaction {
  id: number;
  account_id: number;
  category_id: number;
  tag_id: number;
  amount: number;
  income: boolean;
  //   timestamp: Date; Como almaceno los timestamps?

  constructor(
    id: number,
    account_id: number,
    category_id: number,
    tag_id: number,
    amount: number,
    income: boolean
  ) {
    this.id = id;
    this.account_id = account_id;
    this.category_id = category_id;
    this.tag_id = tag_id;
    this.amount = amount;
    this.income = income;
  }

  static bodyToTransaction(body: any): Transaction {
    const id = body.id ?? -1;
    const account_id = body.account_id ?? -1;
    const category_id = body.category_id ?? -1;
    const tag_id = body.tag_id ?? -1;
    const amount = body.amount ?? 0;
    const income = body.income ?? true;

    return new Transaction(id, account_id, category_id, tag_id, amount, income);
  }
}
