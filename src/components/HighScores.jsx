import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setHighScores } from "../redux/reducers/scoreSlice";

const HighScores = () => {
  const dispatch = useDispatch();
  const scores = useSelector((state) => {
    state.score.highScores;
  });

  useEffect(() => {
    const asyncFunc = async () => {
      const result = await axios.get("http://localhost:6001/getScores");
      dispatch(setHighScores(result.data)); //async thunk!!!!!!!!!!!!!
    };
    asyncFunc();
  }, []);

  return (
    <>
      <div className="scores">
        <h2>High Scores</h2>
        <div className="score-list-wrapper">
          {/* <div className="fade-block"></div> */}
          <ul>
            {scores.map((e, i) => (
              <li key={i}>
                <span>{e.name}</span>

                <span>{e.score}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default HighScores;
