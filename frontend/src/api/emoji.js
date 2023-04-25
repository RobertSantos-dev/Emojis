import api from "./config";
import { getStorage } from "../common/storage";
import { getEmojis, getEmojisId, getUserEmojiId } from "../redux/emoji/slice";

export const emojisGet = async (dispatch) => {
  try {
    const { data } = await api.get('/emojis');
    dispatch(getEmojis(data));

  } catch (error) {
    console.log(error);
  }
}

export const emojisIdGet = async (dispatch, id) => {
  try {
    const { data } = await api.get(`/emojis/${id}`);
    dispatch(getEmojisId(data));

  } catch(error) {
    console.log(error)
  }
}

export const userEmojiPost = async ({ userId, emojiId, dispatch }) => {
  try {
    const token = getStorage('token');
    await api.post('/favorites',{ userId, emojiId: emojiId.id },
      { headers: { Authorization: token },
    });
    dispatch(getUserEmojiId(emojiId))

  } catch (error) {
    console.log(error);
  }
}

export const userEmojiGetId = async ({ userId, emojiId, dispatch }) => {
  try {
    const token = getStorage('token');
    const { data } = await api.get(
      `/favorites/user/${userId}`,
      { headers: { Authorization: token }},
    );

    const favorite = data.filter((e) => e.userId === userId && e.emoji.id === emojiId);
    dispatch(getUserEmojiId(favorite[0].emoji));

  } catch (error) {
    emojisIdGet(dispatch, emojiId);
  }
}