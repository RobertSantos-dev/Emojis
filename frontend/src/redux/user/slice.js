import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: { isLogged: false, login: { email: '' } },
  reducers: {
    login: (state, action) => ({
      ...state, isLogged: true, login: action.payload
    }),
    logout: (state, _action) => ({
      ...state, isLogged: false, login: { email: '' }
    })
  }
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;