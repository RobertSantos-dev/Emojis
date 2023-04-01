import { Request, Response, NextFunction } from "express";
import { tokenVerify } from "../Auth/JWT";
import UsersRepository from "../Repositories/Users";
import statusHttp from '../Utils/statusHttp';

export default class IsValidToken {
  constructor(private usersRepository = new UsersRepository()) {}

  public vToken = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { authorization } = req.headers;

      if (!authorization) {
        return res.status(statusHttp.unauthorized).json({ message: 'Token not found' })
      }
    
      const decode = tokenVerify(authorization)
      const user = await this.usersRepository.getEmail(decode.data.email);
      
      if (user) next();
    } catch {
      return res.status(statusHttp.unauthorized)
        .json({ message: 'Expired or invalid token' });
    }
  }
}