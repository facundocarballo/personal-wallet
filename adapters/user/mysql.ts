import { User } from "../../domain/user";
import { UserRepository } from "../../ports/user";
import {
  ExecuteCreateMySqlStoredProcedure,
  ExecuteGetMySqlStoredProcedure,
} from "../../handlers/stored_procedures";

export class MySqlUserRepository implements UserRepository {
  async Create(user: User): Promise<User | undefined> {
    const newUserId = await ExecuteCreateMySqlStoredProcedure(
      "CALL CreateUser(?, ?, ?, ?, @user_id)",
      "SELECT @user_id AS new_id",
      [user.name, user.lastName, user.email, user.password]
    );
    if (!newUserId) return undefined;
    return new User(
      newUserId,
      user.name,
      user.lastName,
      user.email,
      user.password
    );
  }

  async Get(id: number): Promise<User | undefined> {
    const results = await ExecuteGetMySqlStoredProcedure("CALL GetUser(?)", [
      id,
    ]);
    if (!results) return undefined;
    return new User(
      results[0].id,
      results[0].name,
      results[0].lastName,
      results[0].email,
      results[0].password
    );
  }
}
