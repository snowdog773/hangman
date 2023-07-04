import { useSelector } from "react-redux";

const Header = () => {
  const score = useSelector((state) => state.score.score);
  return (
    <>
      <div className="header">
        <div className="empty-div"></div>
        <h1>HARD HANGMAN</h1>
        <div className="score-div">Score : {score}</div>
      </div>
    </>
  );
};

export default Header;
