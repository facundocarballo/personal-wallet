export class Account {
  id: number;
  name: string;
  currency_id: number;

  constructor(id: number, name: string, currency_id: number) {
    this.id = id;
    this.name = name;
    this.currency_id = currency_id;
  }

  static bodyToAccount(body: any): Account {
    const id = body.id ?? -1;
    const name = body.name ?? "";
    const currency_id = body.currency_id ?? -1;

    return new Account(id, name, currency_id);
  }

  static anyToArray(results: any[]): Account[] | undefined {
    const arr: Account[] = [];
    try {
      results.forEach((res) => {
        arr.push(new Account(res.id, res.name, res.description));
      });
    } catch (err) {
      console.error("Error formatting the results.");
      return undefined;
    }
    return arr;
  }
}
