import { Request, Response, NextFunction } from "express";
import statusHttp from "../Utils/statusHttp";

export default class IsValidLogin {
  public vName = async (req: Request, res: Response, next: NextFunction) => {
    const { name } = req.body;

    if (!name || typeof name !== 'string') {
      const message = 'All fields must be filled';
      return res.status(statusHttp.badRequest).json({ message });
    }

    if (name.split(' ').length !== 2) {
      const message = 'Enter only two names separated by space ex: Diego Costa';
      return res.status(statusHttp.badRequest).json({ message });
    }

    next();
  };
  
  public vEmail = async (req: Request, res: Response, next: NextFunction) => {
    const { email } = req.body;
    const valid = /\S+@\S+\.\S+/;

    if (!valid.test(email)) {
      const message = 'All fields must be filled';
      return res.status(statusHttp.badRequest).json({ message });
    }

    next();
  };
  
  public vPassword = async (req: Request, res: Response, next: NextFunction) => {
    const { password } = req.body;

    if (!password || typeof password !== 'string') {
      const message = 'All fields must be filled';
      return res.status(statusHttp.badRequest).json({ message });
    }
    next();
  };
}