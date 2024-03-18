import { Category } from "../../domain/category";
import {
  ExecuteCreateMySqlStoredProcedure,
  ExecuteGetMySqlStoredProcedure,
} from "../../handlers/stored_procedures";
import { CategoryRepository } from "../../ports/category";

export class MySqlCategoryRepository implements CategoryRepository {
  async Create(category: Category): Promise<Category | undefined> {
    const categoryId = await ExecuteCreateMySqlStoredProcedure(
      "CALL CreateCategory(?, ?, @category_id)",
      "SELECT @category_id AS new_id",
      [category.name, category.description]
    );
    if (!categoryId) return undefined;
    return new Category(categoryId, category.name, category.description);
  }
  async Get(): Promise<Category[] | undefined> {
    const results = await ExecuteGetMySqlStoredProcedure(
      "CALL GetCategories()",
      []
    );
    if (!results) return undefined;
    return Category.anyToArray(results);
  }
  Update(category: Category): Promise<Category | undefined> {
    throw new Error("Method not implemented.");
  }
  Delete(id: number): Promise<Category | undefined> {
    throw new Error("Method not implemented.");
  }
}
