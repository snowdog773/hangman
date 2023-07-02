import { useRef, useEffect } from "react";
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

  const canvasRef = useRef(null);
  // const activeWord = useSelector((state) => state.currentWord.word);

  //
  //

  //
  //
  //******************************************************************* */

  useEffect(() => {
    const canvas = canvasRef.current;

    const context = canvas.getContext("2d");
    context.clearRect(0, 0, context.canvas.width, context.canvas.height);
    context.fillStyle = "#ffffff";

    context.font = "20px Arial";
    context.letterSpacing = "5px";
    const displayLetters = [];
    gameLetters.forEach((e) => {
      correctGuesses.includes(e)
        ? displayLetters.push(e)
        : displayLetters.push("_");
    });
    !displayLetters.includes("_")
      ? context.fillText("You Win!!!", 20, 50)
      : context.fillText(displayLetters.join(""), 20, 50);
  }, [gameLetters, correctGuesses]);

  return (
    <>
      <canvas ref={canvasRef} />
    </>
  );
};

export default Canvas;
