import UsersEmojisRepository from "../Repositories/UsersEmojis";
import { IUsersEmojis } from "../Interfaces/IUsersEmojis";
import statusHttp from "../Utils/statusHttp";

export default class UsersEmojisService {
  constructor(private usersEmojisRepository = new UsersEmojisRepository()) {}

  public getId = async (id: number) => {
    const result = await this.usersEmojisRepository.getId(id);

    if (!result) {
      return { type: statusHttp.notFound, message: 'id not found' }
    }

    return { type: null, message: result };
  }
  
  public getUserId = async (userId: number) => {
    const result = await this.usersEmojisRepository.getUserId(userId);

    if (!result) {
      return { type: statusHttp.notFound, message: 'userId not found' }
    }

    return { type: null, message: result };
  }

  public getEmojiId = async (emojiId: number) => {
    const result = await this.usersEmojisRepository.getEmojiId(emojiId);

    if (!result) {
      return { type: statusHttp.notFound, message: 'emojiId not found' }
    }

    return { type: null, message: result };
  }

  public postCreate = async (values: IUsersEmojis) => {
    const result = await this.usersEmojisRepository.postCreate(values);

    if (!result) {
      return { type: statusHttp.conflict, message: 'Error registering' }
    }

    return { type: null, message: result };
  }
}