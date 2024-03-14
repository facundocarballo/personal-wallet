import { User } from "../../domain/user";
import { UserRepository } from "../../ports/user";

export class MySqlUserRepository implements UserRepository {
    async Create(user: User): Promise<User|undefined> {
        return undefined;
    }

    async Get(id: number): Promise<User|undefined> {
        return undefined
    }
}