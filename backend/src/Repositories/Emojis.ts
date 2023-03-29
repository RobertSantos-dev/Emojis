import Emojis from "../../db/models/Emoji";

export default class EmojiRepository {
  public getId = async (id: number) => {
    const emojiId = await Emojis.findOne({ where: { id } });

    return emojiId;
  }

  public getCode = async (code: string) => {
    const emojiCode = await Emojis.findOne({ where: { code } });

    return emojiCode;
  }

  public getAll = async () => {
    const emojis = await Emojis.findAll();

    return emojis;
  }
}
