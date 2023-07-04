import { useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addGuess,
  addCorrectGuess,
  wrongGuessCount,
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

    wrongGuesses >= 1 && context.fillText("1", 20, 50);
    wrongGuesses >= 2 && context.fillText("1", 30, 50);
    wrongGuesses >= 3 && context.fillText("1", 40, 50);
    wrongGuesses >= 4 && context.fillText("1", 50, 50);
    wrongGuesses >= 5 && context.fillText("1", 60, 50);
  }, [gameLetters, wrongGuesses]);

  return (
    <>
      <canvas ref={canvasRef} />
    </>
  );
};

export default Canvas;
