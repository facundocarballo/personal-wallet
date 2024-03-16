export class Currency {
  id: number;
  name: string;
  symbol: string;
  usd_value: number;
  user_id: number;

  constructor(
    id: number,
    name: string,
    symbol: string,
    usd_value: number,
    user_id: number
  ) {
    this.id = id;
    this.name = name;
    this.symbol = symbol;
    this.usd_value = usd_value;
    this.user_id = user_id;
  }

  static bodyToCurrency(body: any): Currency | undefined {
    const id = body.id ?? -1;
    const name = body.name ?? "";
    const symbol = body.symbol ?? "";
    const usd_value = body.usd_value ?? 1;
    const user_id = body.user_id ?? -1;

    if (user_id === -1) return undefined;
    return new Currency(id, name, symbol, usd_value, user_id);
  }
}
