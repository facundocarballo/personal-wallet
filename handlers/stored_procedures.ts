import { FieldPacket, QueryError } from "mysql2";
import { DatabaseConnection } from "../infrastructure/server";
import ErrorMessages from "../errors.json";

export async function ExecuteCreateMySqlStoredProcedure(
  createQuery: string,
  fetchNewIdQuery: string,
  params: any[]
): Promise<number | undefined> {
  try {
    return await new Promise((resolve, reject) => {
      DatabaseConnection.query(
        createQuery,
        params,
        async (
          err: QueryError | null,
          results: any[],
          fields: FieldPacket[]
        ) => {
          if (err) {
            console.error(ErrorMessages.stored_procedures, err);
            reject(err);
          }
          resolve(await FetchNewId(fetchNewIdQuery));
        }
      );
    });
  } catch (err) {
    console.error(ErrorMessages.stored_procedures, err);
    return;
  }
}

export async function ExecuteGetMySqlStoredProcedure(
  query: string,
  params: any[]
): Promise<any[] | undefined> {
  try {
    return await new Promise((resolve, reject) => {
      DatabaseConnection.query(
        query,
        params,
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
          resolve(results[0]);
        }
      );
    });
  } catch (err) {
    console.error(ErrorMessages.stored_procedures, err);
    return undefined;
  }
}

async function FetchNewId(query: string): Promise<number | undefined> {
  return await new Promise<number | undefined>((resolve, reject) => {
    DatabaseConnection.query(
      query,
      (err: QueryError | null, results: any[], fields: FieldPacket[]) => {
        if (err) {
          console.error("Error reading the new id. ", err);
          reject(err);
          return undefined;
        }
        resolve(results[0].new_id);
      }
    );
  });
}
