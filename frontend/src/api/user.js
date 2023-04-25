import api from "./config";
import { login } from "../redux/user/slice";
import { setStorage } from '../common/storage'

export const loginApi = async ({ email, password }, history, dispatch) => {
  try {
    const { data: { token, user } } = await api.post(
      'users/login',
      { email, password }
    );

    if (token) {
      setStorage('token', token);
      dispatch(login(user));
      history.push('/emojis');
    }
  } catch (error) {
    console.log(error)
  }
}

export const registerApi = async (
  { name, email, password },
  history,
  dispatch
) => {
    try {
      const { data: { token, user } } = await api.post(
        'users/register',
        { name, email, password }
      );

      if (token) {
        setStorage('token', token);
        dispatch(login(user));
        history.push('/emojis');
      }
    } catch (error) {
      console.log(error)
    }
}