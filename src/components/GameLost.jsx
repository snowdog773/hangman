import { useDispatch, useSelector } from "react-redux";
import { setWord } from "../redux/reducers/currentWordSlice";
import { setGameLost } from "../redux/reducers/gameStartedSlice";
import { resetGuesses } from "../redux/reducers/guessesSlice";
import { zeroRoundsWon } from "../redux/reducers/gameStartedSlice";
import { zeroScore } from "../redux/reducers/scoreSlice";

const GameLost = () => {
  const dispatch = useDispatch();
  const word = useSelector((state) => state.currentWord.word);
  const restart = () => {
    dispatch(resetGuesses());
    dispatch(setWord());
    dispatch(setGameLost(false));
    dispatch(zeroRoundsWon());
    dispatch(zeroScore());
  };
  return (
    <>
      <div className="game-lost">
        <h2>You lose, you loser</h2>
        <p>The answer was {word}</p>
        <button onClick={() => restart()}>Play Again?</button>
      </div>
    </>
  );
};

export default GameLost;
