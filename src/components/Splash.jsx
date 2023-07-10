import { useDispatch } from "react-redux";
import { setHasStarted } from "../redux/reducers/gameStartedSlice";
import noose from "../assets/noose.png";
import { useEffect } from "react";
import HighScores from "./HighScores";
const Splash = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const startGame = () => dispatch(setHasStarted(true));
    window.addEventListener("keydown", startGame);
    // cleanup this component
    return () => {
      window.removeEventListener("keydown", startGame);
    };
  }, []);
  return (
    <>
      <h1>HARD HANGMAN</h1>
      <div className="splash-body">
        <img className="swinging-noose" src={noose} />

        <HighScores />
      </div>
      <button
        className="splash-button"
        onClick={() => dispatch(setHasStarted(true))}
      >
        start game
      </button>
    </>
  );
};

export default Splash;
