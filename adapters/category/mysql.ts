import { Category } from "../../domain/category";
import { CategoryRepository } from "../../ports/category";

export class MySqlCategoryRepository implements CategoryRepository {
  Create(category: Category): Promise<Category | undefined> {
    throw new Error("Method not implemented.");
  }
  Get(user_id: number): Promise<Category[] | undefined> {
    throw new Error("Method not implemented.");
  }
  Update(category: Category): Promise<Category | undefined> {
    throw new Error("Method not implemented.");
  }
  Delete(id: number): Promise<Category | undefined> {
    throw new Error("Method not implemented.");
  }
}
