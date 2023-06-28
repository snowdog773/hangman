import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  turn: 0,
};

export const currentTurnSlice = createSlice({
  name: "currentTurn",
  initialState,
  reducers: {
    incrementTurn: (state) => {
      state.turn += 1;
    },
    resetTurn: (state) => {
      state.turn = 0;
    },
  },
});

// Action creators are generated for each case reducer function
export const { incrementTurn, resetTurn } = currentTurnSlice.actions;

export default currentTurnSlice.reducer;
