import { useRef, useEffect } from "react";
import { useSelector } from "react-redux";

const Canvas = () => {
  const wrongGuesses = useSelector((state) => state.guesses.wrongGuesses);

  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    const c = canvas.getContext("2d");
    c.clearRect(0, 0, 300, 150);

    c.strokeStyle = "#ffffff";
    //ground
    c.moveTo(0, 110);
    c.lineTo(300, 110);
    //legs
    c.moveTo(125, 110);
    c.lineTo(150, 90);
    c.lineTo(175, 110);
    //body
    c.moveTo(150, 90);
    c.lineTo(150, 70);
    //arms
    c.moveTo(125, 83);
    c.lineTo(150, 72);
    c.lineTo(175, 83);
    //head
    c.moveTo(160, 60);
    c.arc(150, 60, 10, 0, Math.PI * 2);
    c.stroke();

    if (wrongGuesses >= 1) {
      c.lineWidth = 10;
      c.moveTo(50, 110);
      c.lineTo(50, 20);
      c.stroke();
    }
    wrongGuesses >= 2 && c.fillText("1", 30, 50);
    wrongGuesses >= 3 && c.fillText("1", 40, 50);
    wrongGuesses >= 4 && c.fillText("1", 50, 50);
    wrongGuesses >= 5 && c.fillText("1", 60, 50);
  }, [wrongGuesses]);

  return (
    <>
      <canvas ref={canvasRef} width="300" height="300" />
    </>
  );
};

export default Canvas;
