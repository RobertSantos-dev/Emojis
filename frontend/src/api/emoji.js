import api from "./config";
import { getEmojis } from "../redux/emoji/slice";

export const emojisGet = async (dispatch) => {
  try {
    const { data } = await api.get('/emojis');
    dispatch(getEmojis(data));

    // return data;
  } catch (error) {
    console.log(error);
  }

}