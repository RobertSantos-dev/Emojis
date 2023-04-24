import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

import userSlice from "./user/slice";
import emojisSlice from "./emoji/slice";

const persistConfig = { key: 'root', storage }

const rootReducers = combineReducers({
  user: userSlice,
  emojis: emojisSlice,
});

const reducers = persistReducer(persistConfig, rootReducers);

export const store = configureStore({
  reducer: reducers,
});

export const persistor = persistStore(store);
