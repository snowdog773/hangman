import { configureStore } from "@reduxjs/toolkit";
import currentWordReducer from "./reducers/currentWordSlice";

import gameStartedReducer from "./reducers/gameStartedSlice";
import guessesReducer from "./reducers/guessesSlice";
import scoreReducer from "./reducers/scoreSlice";

export const store = configureStore({
  reducer: {
    currentWord: currentWordReducer,

    hasStarted: gameStartedReducer,
    guesses: guessesReducer,
    score: scoreReducer,
  },
});
