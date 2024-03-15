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
    const name = body.name;
    const lastName = body.last_name;
    const email = body.email;
    const password = body.password;

    if (!name || !lastName || !email || !password) return undefined;
    return new User(-1, name, lastName, email, password);
  }
}
