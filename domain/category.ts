export class Category {
  id: number;
  name: string;
  description: string;

  constructor(id: number, name: string, description: string) {
    this.id = id;
    this.name = name;
    this.description = description;
  }

  static bodyToCategory(body: any): Category {
    const id = body.id ?? -1;
    const name = body.name ?? "";
    const description = body.description ?? "";

    return new Category(id, name, description);
  }

  static anyToArray(results: any[]): Category[] | undefined {
    const arr: Category[] = [];
    try {
      results.forEach((res) => {
        arr.push(new Category(res.id, res.name, res.description));
      });
    } catch (err) {
      console.error("Error formatting the results.");
      return undefined;
    }
    return arr;
  }
}
