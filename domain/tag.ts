export class Tag {
  id: number;
  name: string;
  percentage: number;
  user_id: number;

  constructor(id: number, name: string, percentage: number, user_id: number) {
    this.id = id;
    this.name = name;
    this.percentage = percentage;
    this.user_id = user_id;
  }

  static bodyToTag(body: any): Tag {
    const id = body.id ?? -1;
    const name = body.name ?? "";
    const percentage = body.percentage ?? "";
    const user_id = body.user_id ?? -1;

    return new Tag(id, name, percentage, user_id);
  }
}
