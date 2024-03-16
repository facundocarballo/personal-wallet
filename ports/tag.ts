import { Tag } from "../domain/tag";

export interface TagRepository {
  Create(tag: Tag): Promise<Tag | undefined>;
  Get(user_id: number): Promise<Tag[] | undefined>;
  Update(tag: Tag): Promise<Tag | undefined>;
  Delete(id: number): Promise<Tag | undefined>;
}
