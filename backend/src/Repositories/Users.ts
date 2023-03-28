import Users from "../../db/models/User";

export default class UsersRepository {
  public getEmail = async (email: string) => {
    const user = await Users.findOne({ where: { email } })

    return user;
  }
}