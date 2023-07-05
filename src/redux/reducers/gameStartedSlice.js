import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  hasStarted: false,
  isRoundWon: false,
  isGameLost: false,
  round: 1,
};

export const gameStartedSlice = createSlice({
  name: "hasStarted",
  initialState,
  reducers: {
    setHasStarted: (state, action) => {
      state.hasStarted = action.payload;
    },

    setRoundWon: (state, action) => {
      state.isRoundWon = action.payload;
    },
    setGameLost: (state, action) => {
      state.isGameLost = action.payload;
    },
    incrementRoundsWon: (state) => {
      state.round += 1;
    },
    zeroRoundsWon: (state) => {
      state.round = 1;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setHasStarted,
  setRoundWon,
  setGameLost,
  incrementRoundsWon,
  zeroRoundsWon,
} = gameStartedSlice.actions;

export default gameStartedSlice.reducer;
