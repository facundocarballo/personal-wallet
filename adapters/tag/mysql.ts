import { Tag } from "../../domain/tag";
import { TagRepository } from "../../ports/tag";

export class MySqlTagRepository implements TagRepository {
  Create(tag: Tag): Promise<Tag | undefined> {
    throw new Error("Method not implemented.");
  }
  Get(user_id: number): Promise<Tag[] | undefined> {
    throw new Error("Method not implemented.");
  }
  Update(tag: Tag): Promise<Tag | undefined> {
    throw new Error("Method not implemented.");
  }
  Delete(id: number): Promise<Tag | undefined> {
    throw new Error("Method not implemented.");
  }
}
