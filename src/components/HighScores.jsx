import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setHighScores } from "../redux/reducers/scoreSlice";

const HighScores = () => {
  const dispatch = useDispatch();
  const scores = useSelector((state) => state.score.highScores);

  useEffect(() => {
    const asyncFunc = async () => {
      const result = await axios.get(
        "https://scoreboard-server.pitans.co.uk/getScores"
      );

      if (result.data.length < 20) {
        let item = { name: "_", score: 0 };
        let extras = new Array(20 - result.data.length).fill(item);

        const newArray = result.data.concat(extras);

        dispatch(setHighScores(newArray));
      } else {
        dispatch(setHighScores(result.data));
      }
    };
    asyncFunc();
  }, []);

  return (
    <>
      <div className="scores">
        <h2>Top 20 G.O.A.Ts</h2>
        <div className="score-list-wrapper">
          <ul>
            {scores &&
              scores.map((e, i) => (
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
