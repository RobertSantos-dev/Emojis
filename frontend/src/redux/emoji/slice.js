import { createSlice } from '@reduxjs/toolkit';

const emojisSlice = createSlice({
  name: 'emojis',
  initialState: { emojis: [], emojisId: {} },
  reducers: {
    getEmojis: (state, action) => ({
        ...state,
        emojis: action.payload,
      }),
    getEmojisId: (state, action) => ({
      ...state,
      emojisId: [action.payload, { favorite: false }]
    }),
    getUserEmojiId: (state, action) => ({
      ...state,
      emojisId: [action.payload, { favorite: true }]
    })
  }
});

export const { getEmojis, getEmojisId, getUserEmojiId } = emojisSlice.actions;
export default emojisSlice.reducer;