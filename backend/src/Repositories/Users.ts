import Users from "../../db/models/User";

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
}