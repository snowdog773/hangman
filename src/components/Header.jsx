import { useSelector } from "react-redux";

const Header = () => {
  const score = useSelector((state) => state.score.score);
  const round = useSelector((state) => state.hasStarted.round);
  return (
    <>
      <div className="header">
        <div className="empty-div"></div>
        <div className="h1-wrapper">
          <h1>HARD HANGMAN</h1>
        </div>
        <div className="score-wrapper">
          <div className="rounds-div">Round : {round}</div>
          <div className="score-div">Score : {score}</div>
        </div>
      </div>
    </>
  );
};

export default Header;
