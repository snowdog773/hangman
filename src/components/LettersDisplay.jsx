import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addCorrectGuess,
  addWrongGuess,
  updateDisplayLetters,
} from "../redux/reducers/guessesSlice";

const LettersDisplay = () => {
  const dispatch = useDispatch();
  const gameLetters = useSelector((state) => state.currentWord.letters);
  const correctGuesses = useSelector((state) => state.guesses.correctGuesses);
  const wrongGuesses = useSelector((state) => state.guesses.wrongGuesses);
  const guesses = useSelector((state) => state.guesses.guesses);

  useEffect(() => {
    guesses.forEach((e) => {
      gameLetters.includes(e)
        ? dispatch(addCorrectGuess(e))
        : dispatch(addWrongGuess(e));
    });
  }, [guesses]);

  return (
    <>
      <div className="letter-display">
        {gameLetters.map((e) => {
          return correctGuesses.includes(e) ? <span>{e}</span> : <span>_</span>;
        })}
      </div>
    </>
  );
};

export default LettersDisplay;
