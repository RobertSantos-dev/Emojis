import Users from "../../db/models/User";
import { IUserLogin, IUsers, IUsersGet } from "../Interfaces/IUsers";

export default class UsersRepository {
  public getAll = async () => {
    const users = await Users.findAll();

    return users;
  }

  public getEmail = async (email: string) => {
    const user = await Users.findOne({ where: { email } });

    return user;
  }

  public getName = async (name: string) => {
    const user = await Users.findOne({ where: { name } });

    return user;
  }

  public getEmailPassword = async ({ email, password }: IUserLogin) => {
    const user = await Users.findOne({ where: { email, password } });

    return user as IUsers;
  }

  public postCreate = async (register: IUsers) => {
    const { name, email, password } = register;
    const user = await Users.create({ name, email, password, role: 'user' });

    return user;
  }
}