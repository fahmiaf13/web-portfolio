import { configureStore } from "@reduxjs/toolkit";
import switchReducer from "./features/switchSlice";
import toggleReducer from "./features/toggleSlice";

export const store = configureStore({
  reducer: {
    toggle: toggleReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
