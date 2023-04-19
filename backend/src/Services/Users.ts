import UsersRepository from "../Repositories/Users";
import { IUserLogin, IUsers, IUsersGet } from "../Interfaces/IUsers";

import { createToken } from "../Auth/JWT";
import statusHttp from "../Utils/statusHttp";

export default class UsersService {
  constructor(private usersRepository = new UsersRepository()) {}

  public getEmail = async (email: string) => {
    const user = await this.usersRepository.getEmail(email);
    if (!user) {
      return { type: statusHttp.notFound, message: 'User not found' }
    }

    return { type: null, message: user };
  }

  public getName = async (name: string) => {
    const username = await this.usersRepository.getName(name);
    if (!username) {
      return { type: statusHttp.notFound, message: 'Username not found' }
    }

    return { type: null, message: username };
  }

  public getAll = async () => {
    const users = await this.usersRepository.getAll();

    return { type: null, message: users };
  }

  public getEmailPassword = async (login: IUserLogin) => {
    const user: IUsers = await this.usersRepository.getEmailPassword(login);

    if (!user) {
      return { type: statusHttp.notFound, message: 'Unregistered user' };
    }

    const token = createToken({
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role
    });

    return { type: null, message: token };
  }

  public postCreate = async (register: IUsers) => {
    const username = await this.usersRepository.getName(register.name);
    const useremail = await this.usersRepository.getEmail(register.email);

    if (username || useremail) {
      return { type: statusHttp.conflict, message: 'User exist' }
    }

    const { id, name, email, role
    } = await this.usersRepository.postCreate(register);
    
    const token = createToken({ id, name, email, role });
    return { type: null, message: token };
  }
}
