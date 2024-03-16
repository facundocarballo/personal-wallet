import { Request, Response } from "express";
import { MySqlTagRepository } from "../../adapters/tag/mysql";
import { TagService } from "../../services/tag";

const repository = new MySqlTagRepository();
const service = new TagService(repository);

export const Create = async (req: Request, res: Response): Promise<void> => {};

export const Get = async (req: Request, res: Response): Promise<void> => {};

export const Update = async (req: Request, res: Response): Promise<void> => {};

export const Delete = async (req: Request, res: Response): Promise<void> => {};
