import { createSlice } from "@reduxjs/toolkit";
import { alphabet } from "../../utils/constants";

const initialState = {
  guesses: [],
  correctGuesses: [],
  wrongGuesses: 0,
  isGameOver: false,
  displayLetters: [],
};

export const guessesSlice = createSlice({
  name: "guesses",
  initialState,
  reducers: {
    addGuess: (state, action) => {
      const input = action.payload.toLowerCase();

      //stops duplicate letters in guesses array
      !state.guesses.includes(input) &&
        alphabet.includes(input) &&
        state.guesses.push(input);
    },
    addCorrectGuess: (state, action) => {
      state.correctGuesses.push(action.payload);
    },
    wrongGuessCount: (state) => {
      state.wrongGuesses += 1;
    },
    updateDisplayLetters: (state, action) => {
      state.displayLetters = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addGuess,
  addCorrectGuess,
  wrongGuessCount,
  updateDisplayLetters,
} = guessesSlice.actions;

export default guessesSlice.reducer;
