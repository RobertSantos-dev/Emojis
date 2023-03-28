import UsersService from "../Services/Users";
import { Request, Response } from "express";
import statusHttp from "../Utils/statusHttp";

export default class UsersController {
  constructor(private usersServices = new UsersService()) {}

  public getEmail = async (req: Request, res: Response) => {
    const { type, message } = await this.usersServices.getEmail(req.body.email);
    
    if (type) return res.status(type).json({ message });

    return res.status(statusHttp.ok).json(message)
  }
}