import React from "react";
import { useDispatch } from "react-redux";
import { setHasStarted } from "../redux/reducers/gameStartedSlice";
const Splash = () => {
  const dispatch = useDispatch();
  return (
    <>
      <h1>Hard Hangman</h1>

      <button
        className="splash-button"
        onClick={() => dispatch(setHasStarted())}
      >
        Start Game
      </button>
    </>
  );
};

export default Splash;
