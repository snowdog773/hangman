import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  word: "",
  letters: [],
};

export const setWord = createAsyncThunk("currentWord/callAPI", async () => {
  const api = await axios.get(
    "https://random-word-api.vercel.app/api?words=10"
  );
  const array = api.data;
  const res = array.sort((a, b) => b.length - a.length);
  //resolves array of 10 words, and orders by length
  return res;
});

export const currentWordSlice = createSlice(
  {
    name: "currentWord",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder.addCase(setWord.pending, (state) => {
        state.isLoading = true;
      });
      builder.addCase(setWord.fulfilled, (state, action) => {
        state.isLoading = false;
        state.word = action.payload[0];
        state.letters = Array.from(action.payload[0]);
      });
      builder.addCase(setWord.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
    },
  }

  // reducers: {
  //   setWord: (state, action) => {
  //     state.word = action.payload;
  //   },
  // },
);

// Action creators are generated for each case reducer function
// export const { setWord } = currentWordSlice.actions;

// export default currentWordSlice.reducer;
export default currentWordSlice.reducer;
