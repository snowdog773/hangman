import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addCorrectGuess,
  updateDisplayLetters,
} from "../redux/reducers/guessesSlice";

const LettersDisplay = () => {
  const dispatch = useDispatch();
  const gameLetters = useSelector((state) => state.currentWord.letters);
  const hasApiFailed = useSelector((state) => state.currentWord.hasApiFailed);
  const correctGuesses = useSelector((state) => state.guesses.correctGuesses);
  const wrongGuesses = useSelector((state) => state.guesses.wrongGuesses);
  const guesses = useSelector((state) => state.guesses.guesses);

  // useEffect(() => {
  //   guesses.forEach((e) => {
  //     gameLetters.includes(e)
  //       ? dispatch(addCorrectGuess(e))
  //       : dispatch(addWrongGuess(e));
  //   });
  // }, [guesses]);

  return (
    <>
      <div className="letter-display">
        {hasApiFailed
          ? "Server error, check your connection and try again"
          : gameLetters.map((e, i) => {
              return correctGuesses.includes(e) ? (
                <span key={i}>{e}</span>
              ) : (
                <span key={i}>_</span>
              );
            })}
      </div>
    </>
  );
};

export default LettersDisplay;
