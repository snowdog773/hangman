import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { setWord } from "../redux/reducers/currentWordSlice";

import Canvas from "./Canvas";
const Game = () => {
  const dispatch = useDispatch();
  const activeWord = useSelector((state) => state.currentWord.word);

  const isGameOver = useSelector((state) => state.guesses.isGameOver);

  useEffect(() => {
    !activeWord && dispatch(setWord());
  }, []);

  return (
    <>
      {isGameOver ? <h2>Game Over You Lose</h2> : <Canvas />}

      <p>Current word is {activeWord}</p>
    </>
  );
};

export default Game;
