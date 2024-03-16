import { Category } from "../domain/category";
import { CategoryRepository } from "../ports/category";

export class CategoryService {
  private repository: CategoryRepository;

  constructor(repo: CategoryRepository) {
    this.repository = repo;
  }

  async Create(category: Category): Promise<Category | undefined> {
    return await this.repository.Create(category);
  }

  async Get(user_id: number): Promise<Category[] | undefined> {
    return await this.repository.Get(user_id);
  }

  async Delete(id: number): Promise<Category | undefined> {
    return await this.repository.Delete(id);
  }

  async Update(category: Category): Promise<Category | undefined> {
    return this.repository.Update(category);
  }
}
