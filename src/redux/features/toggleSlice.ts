import { createSlice } from "@reduxjs/toolkit";

const toggleSlice = createSlice({
  name: "toggle",
  initialState: 0,
  reducers: {
    setToggle: (state, action) => (state = action.payload),
  },
});

export const { setToggle } = toggleSlice.actions;
export default toggleSlice.reducer;
