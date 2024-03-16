import { Tag } from "../domain/tag";
import { TagRepository } from "../ports/tag";

export class TagService {
  private repository: TagRepository;

  constructor(repo: TagRepository) {
    this.repository = repo;
  }

  async Create(tag: Tag): Promise<Tag | undefined> {
    return await this.repository.Create(tag);
  }

  async Get(user_id: number): Promise<Tag[] | undefined> {
    return await this.repository.Get(user_id);
  }

  async Delete(id: number): Promise<Tag | undefined> {
    return await this.repository.Delete(id);
  }

  async Update(tag: Tag): Promise<Tag | undefined> {
    return this.repository.Update(tag);
  }
}
