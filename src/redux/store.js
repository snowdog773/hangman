import { configureStore } from "@reduxjs/toolkit";
import currentWordReducer from "./reducers/currentWordSlice";
import currentTurnReducer from "./reducers/currentTurnSlice";
import gameStartedReducer from "./reducers/gameStartedSlice";

export const store = configureStore({
  reducer: {
    currentWord: currentWordReducer,
    currentTurn: currentTurnReducer,
    hasStarted: gameStartedReducer,
  },
});
