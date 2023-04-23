import api from "./config";
import { getEmojis, getEmojisId } from "../redux/emoji/slice";

export const emojisGet = async (dispatch) => {
  try {
    const { data } = await api.get('/emojis');
    dispatch(getEmojis(data));

    // return data;
  } catch (error) {
    console.log(error);
  }
}

export const emojisIdGet = async (dispatch, id) => {
  try {
    const { data } = await api.get(`/emojis/${id}`);
    dispatch(getEmojisId(data))

  } catch(error) {
    console.log(error)
  }
}
