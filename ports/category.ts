import { Category } from "../domain/category";

export interface CategoryRepository {
  Create(category: Category): Promise<Category | undefined>;
  Get(): Promise<Category[] | undefined>;
  Update(category: Category): Promise<Category | undefined>;
  Delete(id: number): Promise<Category | undefined>;
}
