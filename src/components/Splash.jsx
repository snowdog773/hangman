import React from "react";
import { useDispatch } from "react-redux";
import { setHasStarted } from "../redux/reducers/gameStartedSlice";
const Splash = () => {
  const dispatch = useDispatch();
  return (
    <>
      <h1>Hangman</h1>
      <p>Welcome to hangman</p>
      <button onClick={() => dispatch(setHasStarted())}>Start Game</button>
    </>
  );
};

export default Splash;
