import Strikeout from "./Strikeout";
import { useSelector, useDispatch } from "react-redux";
import { addGuess } from "../redux/reducers/guessesSlice";

const Key = (props) => {
  const dispatch = useDispatch();
  const guesses = useSelector((state) => state.guesses.guesses);
  return (
    <>
      <div className="key">
        <p
          onClick={() => {
            dispatch(addGuess(props.letter));
          }}
        >
          {props.letter}
        </p>
        {guesses.includes(props.letter) && <Strikeout />}
      </div>
    </>
  );
};

export default Key;
