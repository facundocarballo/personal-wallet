export class User {
  id: number;
  name: string;
  lastName: string;
  email: string;
  password: string;

  constructor(
    id: number,
    name: string,
    lastName: string,
    email: string,
    password: string
  ) {
    this.id = id;
    this.name = name;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
  }

  static bodyToUser(body: any): User | undefined {
    const id = body.id ?? -1;
    const name = body.name ?? "";
    const lastName = body.last_name ?? "";
    const email = body.email ?? "";
    const password = body.password ?? "";

    return new User(id, name, lastName, email, password);
  }

  isEqualTo(user: User): boolean {
    if (user.id == this.id && user.password == this.password) return true;
    return false;
  }
}
