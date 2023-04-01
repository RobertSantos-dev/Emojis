import { Request, Response } from "express";
import UsersEmojisService from "../Services/UsersEmojis";
import statusHttp from "../Utils/statusHttp";

export default class UsersEmojisController {
  constructor(private usersEmojisService = new UsersEmojisService()) {}

  public getId = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const { type, message } = await this.usersEmojisService.getId(Number(id));

      if (type) return res.status(type).json({ message });

      return res.status(statusHttp.ok).json(message);
    } catch (error) {
      console.log(error);
    }
  }

  public getUserId = async (req: Request, res: Response) => {
    try {
      const { userId } = req.params;
      const { type, message } = await this.usersEmojisService.getUserId(Number(userId));

      if (type) return res.status(type).json({ message });

      return res.status(statusHttp.ok).json(message);
    } catch (error) {
      console.log(error);
    }
  }

  public getEmojiId = async (req: Request, res: Response) => {
    try {
      const { emojiId } = req.params;
      const { type, message } = await this.usersEmojisService.getEmojiId(Number(emojiId));
    
      if (type) return res.status(type).json({ message });

      return res.status(statusHttp.ok).json(message);
    } catch (error) {
      console.log(error);
    }
  }

  public postCreate = async (req: Request, res: Response) => {
    try {
      const { type, message } = await this.usersEmojisService.postCreate(req.body)

      if (type) return res.status(type).json({ message });
    
      return res.status(statusHttp.created).json(message);
    } catch (error) {
      console.log(error)
    }
  }
}