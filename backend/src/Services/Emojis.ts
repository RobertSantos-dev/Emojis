import EmojiRepository from "../Repositories/Emojis";
import statusHttp from "../Utils/statusHttp";

export default class EmojisService {
  constructor(private emojisRepository = new EmojiRepository()) {}

  public getId = async (id: number) => {
    const emojiId = await this.emojisRepository.getId(id);

    if (!emojiId) return { type: statusHttp.notFound, message: 'Id not found' };

    return { type: null, message: emojiId }
  }

  public getCode = async (code: string) => {
    const emojiCode = await this.emojisRepository.getCode(code);

    if (!emojiCode) return { type: statusHttp.notFound, message: 'Code not found' };

    return { type: null, message: emojiCode };
  }

  public getAll = async () => {
    const emojis = await this.emojisRepository.getAll();

    return { type: null, message: emojis };
  }
}
