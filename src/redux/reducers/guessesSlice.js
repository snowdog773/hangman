import { createSlice } from "@reduxjs/toolkit";
import { alphabet } from "../../utils/constants";

const initialState = {
  guesses: [],
  correctGuesses: [],
  wrongGuesses: 0,
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

    resetGuesses: (state) => {
      state.guesses = [];
      state.correctGuesses = [];
      state.wrongGuesses = 0;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addGuess, addCorrectGuess, wrongGuessCount, resetGuesses } =
  guessesSlice.actions;

export default guessesSlice.reducer;
