import UsersRepository from "../Repositories/Users";
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
}
