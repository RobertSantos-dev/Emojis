import UserEmoji from "../../db/models/UserEmoji";
import { IUsersEmojis } from "../Interfaces/IUsersEmojis";

export default class UsersEmojisRepository {
  public getId = async (id: number) => {
    const result = await UserEmoji.findOne({ where: { id } });

    return result;
  }
  
  public getUserId = async (userId: number) => {
    const result = await UserEmoji.findOne({ where: { userId } });

    return result;
  }

  public getEmojiId = async (emojiId: number) => {
    const result = await UserEmoji.findOne({ where: { emojiId } });

    return result;
  }

  public postCreate = async ({ userId, emojiId }: IUsersEmojis) => {
    const result = await UserEmoji.create({ userId, emojiId });

    return result;
  }
}