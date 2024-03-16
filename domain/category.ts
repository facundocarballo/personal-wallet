export class Category {
  id: number;
  name: string;
  description: string;
  user_id: number;

  constructor(id: number, name: string, description: string, user_id: number) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.user_id = user_id;
  }

  static bodyToCategory(body: any): Category {
    const id = body.id ?? -1;
    const name = body.name ?? "";
    const description = body.description ?? "";
    const user_id = body.user_id ?? -1;

    return new Category(id, name, description, user_id);
  }
}
