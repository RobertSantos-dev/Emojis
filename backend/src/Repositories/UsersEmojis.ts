import { Op } from "sequelize";
import Emojis from "../../db/models/Emoji";
import Users from "../../db/models/User";
import UserEmoji from "../../db/models/UserEmoji";
import { IUsersEmojis } from "../Interfaces/IUsersEmojis";

export default class UsersEmojisRepository {
  public getId = async (id: number) => {
    const result = await UserEmoji.findAll({
      where: { id },
      include: [
        { model: Users, attributes: ['name', 'email', 'role'] },
        { model: Emojis, attributes: ['code', 'description'] }
      ]
    });

    return result;
  }
  
  public getUserId = async (userId: number) => {
    const result = await UserEmoji.findAll({
      where: { userId },
      attributes: { exclude: ['id', 'emojiId'] },
      include: [
        { model: Emojis }
        // { model: Users, attributes: ['name', 'email', 'role'] },
      ],
    });

    return result;
  }

  public getEmojiId = async (emojiId: number) => {
    const result = await UserEmoji.findAll({
      where: { emojiId },
      attributes: { exclude: ['id', 'userId'] },
      include: [
        // { model: Emojis, attributes: ['code', 'description'] },
        { model: Users, attributes: { exclude: ['password'] } },
      ]
    });

    return result;
  }

  public getUserIdEmojiId = async ({ userId, emojiId }: IUsersEmojis) => {
    const row = await UserEmoji.findAll({
      where: { [Op.and]: [{ userId }, { emojiId }] }
    });

    return row;
  };

  public postCreate = async ({ userId, emojiId }: IUsersEmojis) => {
    const result = await UserEmoji.create({ userId, emojiId });

    return result;
  }
}