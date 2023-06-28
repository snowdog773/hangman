import React from "react";
import Game from "./components/Game";
import Splash from "./components/Splash";
import "./App.css";
import { useSelector } from "react-redux/es/hooks/useSelector";

const App = () => {
  const hasStarted = useSelector((state) => state.hasStarted.hasStarted);

  return <>{hasStarted ? <Game /> : <Splash />}</>;
};

export default App;
