import { Currency } from "../domain/currency";
import { CurrencyRepository } from "../ports/currency";

export class CurrencyService {
  private repository: CurrencyRepository;

  constructor(repo: CurrencyRepository) {
    this.repository = repo;
  }

  async Create(currency: Currency): Promise<Currency | undefined> {
    return await this.repository.Create(currency);
  }

  async Get(user_id: number): Promise<Currency[] | undefined> {
    return await this.repository.Get(user_id);
  }

  async Delete(id: number): Promise<Currency | undefined> {
    return await this.repository.Delete(id);
  }

  async Update(currency: Currency): Promise<Currency | undefined> {
    return this.repository.Update(currency);
  }
}
