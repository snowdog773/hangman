import React, { useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addGuess } from "../redux/reducers/guessesSlice";
const Canvas = () => {
  const dispatch = useDispatch();
  const gameLetters = useSelector((state) => state.currentWord.letters);
  const guesses = useSelector((state) => state.guesses.guesses);
  const canvasRef = useRef(null);
  const activeWord = useSelector((state) => state.currentWord.word);
  //
  //
  //***************EVENT LISTENERS******************************** */
  useEffect(() => {
    window.addEventListener("keydown", (event) =>
      dispatch(addGuess(event.key))
    );
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
    const canvas = canvasRef.current;

    const context = canvas.getContext("2d");
    context.clearRect(0, 0, context.canvas.width, context.canvas.height);
    context.fillStyle = "#000000";
    // context.fillRect(0, 0, context.canvas.width, context.canvas.height);
    context.font = "30px Arial";
    const displayLetters = [];
    gameLetters.forEach((e, i) => {
      guesses.includes(e) ? displayLetters.push(e) : displayLetters.push("_");
    });
    context.fillText(displayLetters.join(""), 20, 50);
  }, [gameLetters, guesses]);

  return (
    <>
      <canvas ref={canvasRef} />
      <p>Guesses: {guesses.join()}</p>
    </>
  );
};

export default Canvas;
