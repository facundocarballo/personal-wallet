import { FieldPacket, QueryError } from "mysql2";
import { User } from "../../domain/user";
import { DatabaseConnection } from "../../infrastructure/server";
import { UserRepository } from "../../ports/user";
import ErrorMessages from "../../errors.json";

export class MySqlUserRepository implements UserRepository {
  async Create(user: User): Promise<User | undefined> {
    const newUserId = await ExecuteCreateUserStoredProcedure(user);
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
    const user = await ExecuteGetUserStoredProcedure(id);
    if (!user) return undefined;
    return new User(id, user.name, user.lastName, user.email, user.password);
  }
}

// Helpers
/// Create User
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
            console.error(ErrorMessages.stored_procedures, err);
            reject(err);
            return undefined;
          }
          resolve(await FetchNewUserId());
        }
      );
    });
  } catch (error) {
    console.error(ErrorMessages.stored_procedures, error);
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

/// Get User
async function ExecuteGetUserStoredProcedure(
  id: number
): Promise<User | undefined> {
  try {
    return await new Promise<User | undefined>((resolve, reject) => {
      DatabaseConnection.query(
        "CALL GetUser(?)",
        [id],
        (err: QueryError | null, results: any[], fields: FieldPacket[]) => {
          if (err) {
            console.error(ErrorMessages.stored_procedures, err);
            reject(err);
            return undefined;
          }
          const user = User.bodyToUser(results[0][0]);
          if (!user) {
            reject("User cannot be parsed from JSON.");
            return undefined;
          }
          resolve(user);
        }
      );
    });
  } catch (err) {
    console.error(ErrorMessages.stored_procedures, err);
    return undefined;
  }
}
