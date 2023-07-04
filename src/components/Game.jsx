import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { setWord } from "../redux/reducers/currentWordSlice";
import {
  addCorrectGuess,
  addGuess,
  wrongGuessCount,
} from "../redux/reducers/guessesSlice";
import { addToScore, zeroScore } from "../redux/reducers/scoreSlice";
import Header from "./Header";
import Footer from "./Footer";
import Canvas from "./Canvas";
import LettersDisplay from "./LettersDisplay";
import Keyboard from "./Keyboard";

const Game = () => {
  const dispatch = useDispatch();
  const letters = useSelector((state) => state.currentWord.letters);
  const guesses = useSelector((state) => state.guesses.guesses);
  const isGameOver = useSelector((state) => state.guesses.isGameOver);
  const correctGuesses = useSelector((state) => state.guesses.correctGuesses);
  const wrongGuesses = useSelector((state) => state.guesses.wrongGuesses);

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

  //************INITIAL API CALL***************************** */
  useEffect(() => {
    !letters[0] && dispatch(setWord());
  }, []);

  //*******************GAME LOGIC******************************* */

  useEffect(() => {
    console.log(wrongGuesses);
    // checks if last guess is one of the letters
    if (letters.includes(guesses[guesses.length - 1])) {
      dispatch(addCorrectGuess(guesses[guesses.length - 1]));
      dispatch(addToScore(50));
      // checks win condition
      if (letters.every((e) => guesses.includes(e))) {
        console.log("game won");
      }
    } else {
      if (guesses.length > 0) {
        wrongGuesses >= 5
          ? console.log("game over loser")
          : dispatch(wrongGuessCount());
      }
    }
  }, [guesses]);
  return (
    <>
      <Header />

      <Canvas />
      <LettersDisplay />
      <Keyboard />
      <Footer />

      {/* <p>Current word is {activeWord}</p> */}
    </>
  );
};

export default Game;
