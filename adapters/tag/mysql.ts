import { Tag } from "../../domain/tag";
import { TagRepository } from "../../ports/tag";
import {
  ExecuteCreateMySqlStoredProcedure,
  ExecuteGetMySqlStoredProcedure,
} from "../../handlers/stored_procedures";

export class MySqlTagRepository implements TagRepository {
  async Create(tag: Tag): Promise<Tag | undefined> {
    const tagId = await ExecuteCreateMySqlStoredProcedure(
      "CALL CreateTag(?, ?, ?, @tag_id)",
      "SELECT @tag_id AS new_id",
      [tag.name, tag.percentage, tag.user_id]
    );
    if (!tagId) return undefined;
    return new Tag(tagId, tag.name, tag.percentage, tag.user_id);
  }
  async Get(user_id: number): Promise<Tag[] | undefined> {
    const tags = await ExecuteGetMySqlStoredProcedure("CALL GetTags(?)", [
      user_id,
    ]);
    if (!tags) return undefined;
    return Tag.resultsToTags(tags);
  }
  Update(tag: Tag): Promise<Tag | undefined> {
    throw new Error("Method not implemented.");
  }
  Delete(id: number): Promise<Tag | undefined> {
    throw new Error("Method not implemented.");
  }
}
