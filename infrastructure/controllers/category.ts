import { Request, Response } from "express";
import { MySqlCategoryRepository } from "../../adapters/category/mysql";
import { CategoryService } from "../../services/category";
import { Category } from "../../domain/category";
import ErrorMessages from "../../errors.json";

const repository = new MySqlCategoryRepository();
const service = new CategoryService(repository);

export const Create = async (req: Request, res: Response): Promise<void> => {
  if (req.body.user_id !== 1) {
    res.status(400).send(ErrorMessages.category.post.not_owner);
    return;
  }

  const category = Category.bodyToCategory(req.body);
  if (!category) {
    res.status(400).send(ErrorMessages.category.post[400]);
    return;
  }

  const categoryCreated = await service.Create(category);
  if (!categoryCreated) {
    res.status(500).send(ErrorMessages[500]);
    return;
  }

  res.status(200).send({
    category: categoryCreated,
  });
};

export const Get = async (req: Request, res: Response): Promise<void> => {
  const categories = await service.Get();
  if (!categories) {
    res.status(500).send(ErrorMessages[500]);
    return;
  }

  res.status(200).send({
    currencies: categories,
  });
};

export const Delete = async (req: Request, res: Response): Promise<void> => {};

export const Update = async (req: Request, res: Response): Promise<void> => {};
