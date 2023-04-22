import { createSlice } from '@reduxjs/toolkit';

const emojisSlice = createSlice({
  name: 'emojis',
  initialState: [],
  reducers: {
    getEmojis: (_state, action) => (action.payload)
  }
});

export const { getEmojis } = emojisSlice.actions;
export default emojisSlice.reducer;