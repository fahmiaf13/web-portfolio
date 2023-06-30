import { createSlice } from "@reduxjs/toolkit";

const buttonSlice = createSlice({
  name: "switch",
  initialState: false,
  reducers: {
    setSwitch: (state, action) => action.payload,
  },
});

export const { setSwitch } = buttonSlice.actions;
export default buttonSlice.reducer;
