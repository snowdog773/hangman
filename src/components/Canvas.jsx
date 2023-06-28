import React, { useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addGuess,
  addCorrectGuess,
  addWrongGuess,
} from "../redux/reducers/guessesSlice";

const Canvas = () => {
  const dispatch = useDispatch();
  const gameLetters = useSelector((state) => state.currentWord.letters);
  const correctGuesses = useSelector((state) => state.guesses.correctGuesses);
  const wrongGuesses = useSelector((state) => state.guesses.wrongGuesses);
  const guesses = useSelector((state) => state.guesses.guesses);
  const isGameOver = useSelector((state) => state.guesses.isGameOver);
  const canvasRef = useRef(null);
  // const activeWord = useSelector((state) => state.currentWord.word);

  //
  //
  //***************EVENT LISTENERS******************************** */
  useEffect(() => {
    window.addEventListener("keydown", (event) => {
      dispatch(addGuess(event.key));
    });
    // cleanup this component
    return () => {
      window.removeEventListener("keydown", () =>
        console.log("listeners removed)")
      );
    };
  }, []);
  //
  //
  //******************************************************************* */

  useEffect(() => {
    guesses.forEach((e) => {
      gameLetters.includes(e)
        ? dispatch(addCorrectGuess(e))
        : dispatch(addWrongGuess(e));
    });
  }, [guesses]);

  useEffect(() => {
    const canvas = canvasRef.current;

    const context = canvas.getContext("2d");
    context.clearRect(0, 0, context.canvas.width, context.canvas.height);
    context.fillStyle = "#000000";
    // context.fillRect(0, 0, context.canvas.width, context.canvas.height);
    context.font = "30px Arial";
    const displayLetters = [];
    gameLetters.forEach((e) => {
      correctGuesses.includes(e)
        ? displayLetters.push(e)
        : displayLetters.push("_");
    });
    context.fillText(displayLetters.join(""), 20, 50);
  }, [gameLetters, correctGuesses]);

  return (
    <>
      <p>Wrong guesses {wrongGuesses.length}</p>
      <canvas ref={canvasRef} />
      <p>Correct Guesses: {correctGuesses.join()}</p>
      <p>Wrong Guesses: {wrongGuesses.join()}</p>
      <p>Guesses: {guesses.join()}</p>
    </>
  );
};

export default Canvas;
