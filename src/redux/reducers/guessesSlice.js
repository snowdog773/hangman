import { createSlice } from "@reduxjs/toolkit";
import { alphabet } from "../../utils/constants";

const initialState = {
  guesses: [],
  correctGuesses: [],
  wrongGuesses: [],
  isGameOver: false,
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
      !state.correctGuesses.includes(action.payload) &&
        state.correctGuesses.push(action.payload);
    },
    addWrongGuess: (state, action) => {
      !state.wrongGuesses.includes(action.payload) &&
        state.wrongGuesses.push(action.payload);
      if (state.wrongGuesses.length >= 5) {
        state.isGameOver = true;
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { addGuess, addCorrectGuess, addWrongGuess } =
  guessesSlice.actions;

export default guessesSlice.reducer;
