import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./user/slice";
import emojisSlice from "./emoji/slice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    emojis: emojisSlice
  },
});