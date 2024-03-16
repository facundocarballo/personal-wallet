import { Request, Response } from "express";
import { MySqlCategoryRepository } from "../../adapters/category/mysql";
import { CategoryService } from "../../services/category";

const repository = new MySqlCategoryRepository();
const service = new CategoryService(repository);

export const Create = async (req: Request, res: Response): Promise<void> => {};

export const Get = async (req: Request, res: Response): Promise<void> => {};

export const Delete = async (req: Request, res: Response): Promise<void> => {};

export const Update = async (req: Request, res: Response): Promise<void> => {};
