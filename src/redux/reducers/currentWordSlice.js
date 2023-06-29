import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  word: "",
  letters: [],
};

export const setWord = createAsyncThunk("currentWord/callAPI", async () => {
  const api = await axios.get(
    "https://random-word-api.vercel.app/api?words=20"
  );
  const array = api.data;

  const hyphenCheck = new RegExp(/-/gm);
  const filteredArray = array.filter((e) => !hyphenCheck.test(e));

  const res = filteredArray.sort((a, b) => b.length - a.length);
  //resolves array of 20 words, and orders by length to return the longest
  return res;
});

export const currentWordSlice = createSlice({
  name: "currentWord",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(setWord.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(setWord.fulfilled, (state, action) => {
      state.isLoading = false;
      if (!state.word) {
        state.word = action.payload[0];
        state.letters = Array.from(action.payload[0]);
      }
    });
    builder.addCase(setWord.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

export default currentWordSlice.reducer;
