import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  score: 0,
  highScores: [],
};

export const scoreSlice = createSlice({
  name: "score",
  initialState,
  reducers: {
    addToScore: (state, action) => {
      state.score += action.payload;
    },
    zeroScore: (state) => {
      state.score = 0;
    },
    setHighScores: (state, action) => {
      state.highScores = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToScore, zeroScore, setHighScores } = scoreSlice.actions;

export default scoreSlice.reducer;
