import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { setWord } from "../redux/reducers/currentWordSlice";
import {
  addCorrectGuess,
  addGuess,
  wrongGuessCount,
} from "../redux/reducers/guessesSlice";
import { addToScore } from "../redux/reducers/scoreSlice";
import { setRoundWon, setGameLost } from "../redux/reducers/gameStartedSlice";
import Header from "./Header";
import Footer from "./Footer";
import Canvas from "./Canvas";
import LettersDisplay from "./LettersDisplay";
import Keyboard from "./Keyboard";
import RoundWon from "./RoundWon";
import GameLost from "./GameLost";
import HighScores from "./HighScores";
import audioHammer from "../assets/hammer.mp3";
import audioChoke from "../assets/choke.mp3";

const Game = () => {
  const dispatch = useDispatch();
  const letters = useSelector((state) => state.currentWord.letters);
  const guesses = useSelector((state) => state.guesses.guesses);
  const wrongGuesses = useSelector((state) => state.guesses.wrongGuesses);
  const isRoundWon = useSelector((state) => state.hasStarted.isRoundWon);
  const isGameLost = useSelector((state) => state.hasStarted.isGameLost);

  //***************EVENT LISTENERS******************************** */

  useEffect(() => {
    const listener = (event) => dispatch(addGuess(event.key));
    window.addEventListener("keydown", listener);

    (isRoundWon || isGameLost || !letters[0]) &&
      window.removeEventListener("keydown", listener); //locks out keys when not in play

    // cleanup this component
    return () => {
      window.removeEventListener("keydown", listener);
    };
  }, [isRoundWon, isGameLost, letters]);

  //************INITIAL API CALL***************************** */
  useEffect(() => {
    !letters[0] && dispatch(setWord());
  }, []);

  //*******************GAME LOGIC******************************* */

  useEffect(() => {
    // checks if last guess is one of the letters
    if (letters.includes(guesses[guesses.length - 1])) {
      dispatch(addCorrectGuess(guesses[guesses.length - 1]));
      dispatch(addToScore(100)); // change score per correct guess here
      // checks win condition
      if (letters.every((e) => guesses.includes(e))) {
        dispatch(setRoundWon(true));
      }
    } else {
      if (guesses.length > 0) {
        if (wrongGuesses >= 4) {
          //value of wrongGuesses is stale here, runs 1 behind state
          dispatch(wrongGuessCount());
          new Audio(audioChoke).play();
        } else {
          dispatch(wrongGuessCount());
          new Audio(audioHammer).play();
        }
      }
    }
  }, [guesses]);
  return (
    <>
      <Header />

      <Canvas />
      <LettersDisplay />
      {letters[0] && <Keyboard />}
      <Footer />

      {isRoundWon && <RoundWon />}
      {isGameLost && <GameLost />}
    </>
  );
};

export default Game;
