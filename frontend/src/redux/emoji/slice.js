import { createSlice } from '@reduxjs/toolkit';

const emojisSlice = createSlice({
  name: 'emojis',
  initialState: {emojis: [], emojisId: {}},
  reducers: {
    getEmojis: (state, action) => ({
        ...state,
        emojis: action.payload,
      }),
    getEmojisId: (state, action) => ({
      ...state,
      emojisId: action.payload
    })
  }
});

export const { getEmojis, getEmojisId } = emojisSlice.actions;
export default emojisSlice.reducer;