import EmojisService from "../Services/Emojis";
import { Request, Response } from "express";
import statusHttp from "../Utils/statusHttp";

export default class EmojisController {
  constructor(private emojisService = new EmojisService){}

  public getAll = async (_req: Request, res: Response) => {
    const { message } = await this.emojisService.getAll();

    return res.status(statusHttp.ok).json(message);
  }

  public getId = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { type, message } = await this.emojisService.getId(Number(id));

    if (type) return res.status(type).json({ message });

    return res.status(statusHttp.ok).json(message);
  }

  public postCode = async (req: Request, res: Response) => {
    const { code } = req.body;
    const { type, message } = await this.emojisService.getCode(code as string);

    if (type) return res.status(type).json({ message });

    return res.status(statusHttp.ok).json(message);
  }
}
