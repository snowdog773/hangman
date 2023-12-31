import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  incrementRoundsWon,
  setRoundWon,
} from "../redux/reducers/gameStartedSlice";
import { resetGuesses } from "../redux/reducers/guessesSlice";
import { setWord } from "../redux/reducers/currentWordSlice";
import { addToScore } from "../redux/reducers/scoreSlice";

const RoundWon = () => {
  const dispatch = useDispatch();

  const guessesLeft = 5 - useSelector((state) => state.guesses.wrongGuesses);
  const totalBonus = 1000 + 500 * guessesLeft;

  const nextRound = () => {
    dispatch(resetGuesses());
    dispatch(setWord());
    dispatch(setRoundWon(false));
    dispatch(incrementRoundsWon());
    dispatch(addToScore(totalBonus));
  };

  // delayed render code
  const [delayRender, setDelay] = useState(false);
  setTimeout(() => setDelay(true), 2000);

  return (
    <>
      {delayRender && (
        <div className="round-won">
          <div className="popup-wrapper">
            <h2>Round Won</h2>
            <h3>Bonus</h3>
            <ul>
              <li>Round Bonus : 1000</li>
              <li>Guesses Left : {guessesLeft} X 500</li>
              <li>Total : {totalBonus}</li>
            </ul>
            <button onClick={() => nextRound()}>Continue</button>
          </div>
        </div>
      )}
    </>
  );
};

export default RoundWon;
