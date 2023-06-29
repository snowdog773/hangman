import { useDispatch } from "react-redux";
import { setHasStarted } from "../redux/reducers/gameStartedSlice";
import noose from "../assets/noose.png";
const Splash = () => {
  const dispatch = useDispatch();
  return (
    <>
      <h1>HARD HANGMAN</h1>
      <img className="swinging-noose" src={noose} />
      <button
        className="splash-button"
        onClick={() => dispatch(setHasStarted())}
      >
        start game
      </button>
    </>
  );
};

export default Splash;
