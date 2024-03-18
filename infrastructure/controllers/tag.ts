import { Request, Response } from "express";
import { MySqlTagRepository } from "../../adapters/tag/mysql";
import { TagService } from "../../services/tag";
import { Tag } from "../../domain/tag";
import ErrorMessages from "../../errors.json";

const repository = new MySqlTagRepository();
const service = new TagService(repository);

export const Create = async (req: Request, res: Response): Promise<void> => {
  const tag = Tag.bodyToTag(req.body);
  if (!tag) {
    res.status(400).send(ErrorMessages.tag.post[400]);
    return;
  }

  const tagCreated = await service.Create(tag);
  if (!tagCreated) {
    res.status(500).send(ErrorMessages.tag.post[500]);
    return;
  }
  
  res.status(200).send({
    tag: tagCreated,
  });
};

export const Get = async (req: Request, res: Response): Promise<void> => {
  const user_id = (req as any).user_id;
  if (!user_id) {
    res.status(400).send(ErrorMessages.tag.get[400]);
    return;
  }

  const tags = await service.Get(user_id);
  if (!tags) {
    res.status(500).send(ErrorMessages.tag.get[500]);
    return;
  }

  res.status(200).send({
    tags: tags,
  });
};

export const Update = async (req: Request, res: Response): Promise<void> => {};

export const Delete = async (req: Request, res: Response): Promise<void> => {};
