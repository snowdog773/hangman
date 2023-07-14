import Game from "./components/Game";
import Splash from "./components/Splash";
import "./App.css";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { Helmet } from "react-helmet";

const App = () => {
  const hasStarted = useSelector((state) => state.hasStarted.hasStarted);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        {/* <!-- Primary Meta Tags --> */}
        <title>Hard Hangman</title>
        <link rel="canonical" href="https://hard-hangman.pitans.co.uk" />
        <link rel="icon" href="/favicon.png" />
        <meta name="title" content="Hard Hangman" />
        <meta
          name="description"
          content="It's Hangman, but really hard. Beat the high score!"
        />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://hard-hangman.pitans.co.uk" />
        <meta property="og:title" content="Hard Hangman" />
        <meta
          property="og:description"
          content="It's Hangman, but really hard. Beat the high score!"
        />
        <meta
          property="og:image"
          content="https://hard-hangman.pitans.co.uk/og/hangman.jpg"
        />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://hard-hangman.pitans.co.uk"
        />
        <meta property="twitter:title" content="Hard Hangman" />
        <meta
          property="twitter:description"
          content="It's Hangman, but really hard. Beat the high score!"
        />
        <meta
          property="twitter:image"
          content="https://hard-hangman.pitans.co.uk/og/hangman.jpg"
        />

        {/* <!-- Meta Tags Generated with https://metatags.io --> */}
      </Helmet>
      {hasStarted ? <Game /> : <Splash />}
    </>
  );
};

export default App;
