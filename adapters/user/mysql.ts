import { FieldPacket, QueryError } from "mysql2";
import { User } from "../../domain/user";
import { DatabaseConnection } from "../../infrastructure/server";
import { UserRepository } from "../../ports/user";

export class MySqlUserRepository implements UserRepository {
  async Create(user: User): Promise<User | undefined> {
    const newUserId = await ExecuteCreateUserStoredProcedure(user);
    if (!newUserId) {
      return undefined;
    }
    return new User(
      newUserId,
      user.name,
      user.lastName,
      user.email,
      user.password
    );
  }

  async Get(id: number): Promise<User | undefined> {
    return undefined;
  }
}

// Helpers
async function ExecuteCreateUserStoredProcedure(
  user: User
): Promise<number | undefined> {
  try {
    return await new Promise<number | undefined>((resolve, reject) => {
      DatabaseConnection.query(
        "CALL CreateUser(?, ?, ?, ?, @user_id)",
        [user.name, user.lastName, user.email, user.password],
        async (
          err: QueryError | null,
          results: any[],
          fields: FieldPacket[]
        ) => {
          if (err) {
            console.error("Error executing the stored procedure. ", err);
            reject(err);
            return undefined;
          }
          resolve(await FetchNewUserId());
        }
      );
    });
  } catch (error) {
    console.error("Error executing the stored procedure.", error);
    return undefined;
  }
}

async function FetchNewUserId(): Promise<number | undefined> {
  return await new Promise<number | undefined>((resolve, reject) => {
    DatabaseConnection.query(
      "SELECT @user_id AS user_id",
      (err: QueryError | null, results: any[], fields: FieldPacket[]) => {
        if (err) {
          console.error("Error reading the new user_id. ", err);
          reject(err);
          return undefined;
        }
        resolve(results[0].user_id);
      }
    );
  });
}
