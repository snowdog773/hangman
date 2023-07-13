import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setWord } from "../redux/reducers/currentWordSlice";
import { setGameLost } from "../redux/reducers/gameStartedSlice";
import { resetGuesses } from "../redux/reducers/guessesSlice";
import { zeroRoundsWon } from "../redux/reducers/gameStartedSlice";
import { zeroScore } from "../redux/reducers/scoreSlice";

const GameLost = () => {
  const dispatch = useDispatch();
  const word = useSelector((state) => state.currentWord.word);
  const score = useSelector((state) => state.score.score);
  const highScores = useSelector((state) => state.score.highScores);
  const [showRestart, setShowRestart] = useState(false);
  const [errorMessage, setShowErrorMessage] = useState(false);
  const [scoreName, setScoreName] = useState("");
  const restart = () => {
    dispatch(resetGuesses());
    dispatch(setWord());
    dispatch(setGameLost(false));
    dispatch(zeroRoundsWon());
    dispatch(zeroScore());
  };

  useEffect(() => {
    //checks score against high score and returns position index
    const index = highScores.findIndex((e) => e.score < score);

    if (index === -1) {
      setShowRestart(true);
    } else {
      setShowRestart(false);
    }
    let storedName = localStorage.getItem("name");
    storedName && setScoreName(storedName);
  }, []);

  const enterHighScore = async () => {
    if (scoreName) {
      await axios.post("http://scoreboard-server.pitans.co.uk/addNewScore", {
        name: scoreName,
        score,
      });
      localStorage.setItem("name", scoreName);
      setShowErrorMessage(false);
      setShowRestart(true);
    } else {
      setShowErrorMessage(true);
    }
  };

  return (
    <>
      <div className="game-lost">
        <div className="popup-wrapper">
          <h2>You lose, you loser</h2>
          <p>The answer was {word}</p>
          {showRestart ? (
            <button onClick={() => restart()}>Play Again?</button>
          ) : (
            <div>
              <p>You have a high score, enter your name</p>
              <input
                type="text"
                id="name"
                value={scoreName}
                onChange={(e) => setScoreName(e.target.value)}
              ></input>
              <button onClick={() => enterHighScore()}>Submit</button>
            </div>
          )}
          {errorMessage && (
            <p className="error">Did you forget your name, Brainiac?</p>
          )}
        </div>
      </div>
    </>
  );
};

export default GameLost;
