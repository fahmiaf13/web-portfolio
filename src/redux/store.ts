import { configureStore } from "@reduxjs/toolkit";
import switchReducer from "./features/switchSlice";

export const store = configureStore({
  reducer: {
    switch: switchReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
