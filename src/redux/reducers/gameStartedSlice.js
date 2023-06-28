import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  hasStarted: false,
};

export const gameStartedSlice = createSlice({
  name: "hasStarted",
  initialState,
  reducers: {
    setHasStarted: (state) => {
      state.hasStarted === false
        ? (state.hasStarted = true)
        : (state.hasStarted = false);
    },
  },
});

// Action creators are generated for each case reducer function
export const { setHasStarted } = gameStartedSlice.actions;

export default gameStartedSlice.reducer;
