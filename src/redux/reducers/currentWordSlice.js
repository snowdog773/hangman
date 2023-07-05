import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  word: "",
  letters: [],
  hasApiFailed: false,
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
      state.hasApiFailed = false;
    });
    builder.addCase(setWord.fulfilled, (state, action) => {
      state.isLoading = false;

      state.word = action.payload[0];
      state.letters = Array.from(action.payload[0]);
      state.hasApiFailed = false;
    });
    builder.addCase(setWord.rejected, (state) => {
      state.isLoading = false;
      state.hasApiFailed = true;
    });
  },
});

export default currentWordSlice.reducer;
