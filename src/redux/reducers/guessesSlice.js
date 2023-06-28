import { createSlice } from "@reduxjs/toolkit";
import { alphabet } from "../../utils/constants";

const initialState = {
  guesses: [],
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
  },
});

// Action creators are generated for each case reducer function
export const { addGuess } = guessesSlice.actions;

export default guessesSlice.reducer;
