import UsersService from "../Services/Users";
import { Request, Response } from "express";
import statusHttp from "../Utils/statusHttp";

export default class UsersController {
  constructor(private usersServices = new UsersService()) {}

  public login = async (req: Request, res: Response) => {
    try {
      const { type, message } = await this.usersServices.getEmailPassword(req.body);

      if (type) return res.status(type).json({ message });

      return res.status(statusHttp.created).json({ token: message })
    } catch (error) {
      console.log(error)
    }
  }
  
  public register = async (req: Request, res: Response) => {
    try {
      const { type, message } = await this.usersServices.postCreate(req.body);

      if (type) return res.status(type).json({ message });

      return res.status(statusHttp.created).json({ token: message });
    } catch (error) {
      console.log(error)
    }
  }
}