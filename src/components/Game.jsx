import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setWord } from "../redux/reducers/currentWordSlice";
import { incrementTurn, resetTurn } from "../redux/reducers/currentTurnSlice";

import Canvas from "./Canvas";
const Game = () => {
  const dispatch = useDispatch();
  const activeWord = useSelector((state) => state.currentWord.word);
  const gameLetters = useSelector((state) => state.currentWord.letters);
  const currentTurn = useSelector((state) => state.currentTurn.turn);

  useEffect(() => {
    !activeWord && dispatch(setWord());
  }, []);

  return (
    <>
      <Canvas />

      <p>Current word is {activeWord}</p>

      <button onClick={() => dispatch(setWord())}>Change Word</button>

      <p>Current turn is {currentTurn}</p>
      <button onClick={() => dispatch(incrementTurn())}>+</button>
      <button onClick={() => dispatch(resetTurn())}>reset</button>
    </>
  );
};

export default Game;
