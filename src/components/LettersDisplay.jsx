import { useSelector } from "react-redux";

const LettersDisplay = () => {
  const gameLetters = useSelector((state) => state.currentWord.letters);
  const hasApiFailed = useSelector((state) => state.currentWord.hasApiFailed);
  const correctGuesses = useSelector((state) => state.guesses.correctGuesses);

  return (
    <>
      <div className="letter-display">
        {hasApiFailed
          ? "Server error, check your connection and try again"
          : gameLetters.map((e, i) => {
              return correctGuesses.includes(e) ? (
                <span key={i}>{e}</span>
              ) : (
                <span key={i}>_</span>
              );
            })}
      </div>
    </>
  );
};

export default LettersDisplay;
