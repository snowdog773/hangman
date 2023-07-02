import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { setWord } from "../redux/reducers/currentWordSlice";
import { addGuess } from "../redux/reducers/guessesSlice";
import Header from "./Header";
import Footer from "./Footer";
import Canvas from "./Canvas";
import LettersDisplay from "./LettersDisplay";
import Keyboard from "./Keyboard";
const Game = () => {
  const dispatch = useDispatch();
  const activeWord = useSelector((state) => state.currentWord.word);

  const isGameOver = useSelector((state) => state.guesses.isGameOver);

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

  useEffect(() => {
    !activeWord && dispatch(setWord());
  }, []);

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
