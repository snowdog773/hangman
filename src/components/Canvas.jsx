import { useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setGameLost } from "../redux/reducers/gameStartedSlice";

const Canvas = () => {
  const dispatch = useDispatch();
  const wrongGuesses = useSelector((state) => state.guesses.wrongGuesses);

  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    const c = canvas.getContext("2d");
    c.strokeStyle = "#ffffff";

    c.clearRect(0, 0, 300, 300);

    c.beginPath();
    c.lineWidth = "2";
    //ground
    c.moveTo(0, 200);
    c.lineTo(300, 200);
    //legs
    c.moveTo(130, 175);
    c.lineTo(150, 155);
    c.lineTo(170, 175);
    //body
    c.moveTo(150, 155);
    c.lineTo(150, 135);
    //arms
    c.moveTo(125, 148);
    c.lineTo(150, 137);
    c.lineTo(175, 148);
    //head
    c.moveTo(160, 125);
    c.arc(150, 125, 10, 0, Math.PI * 2);
    c.stroke();

    if (wrongGuesses >= 1) {
      // c.lineWidth = 10;
      c.beginPath();
      c.lineWidth = "5";
      c.moveTo(50, 200);
      c.lineTo(50, 40);
      c.moveTo(20, 200);
      c.lineTo(50, 170);
      c.lineTo(80, 200);
      c.stroke();
    }
    if (wrongGuesses >= 2) {
      c.beginPath();
      c.moveTo(50, 42);
      c.lineTo(152, 42);
      c.moveTo(50, 70);
      c.lineTo(80, 42);
      c.stroke();
    }
    if (wrongGuesses >= 3) {
      c.beginPath();
      c.moveTo(150, 42);
      c.lineTo(150, 70);
      c.stroke();
    }
    if (wrongGuesses >= 4) {
      c.beginPath();
      c.lineWidth = "2";
      c.moveTo(150, 70);
      c.lineTo(150, 115);
      for (let i = 0; i < 10; i += 5) {
        c.arc(150, 113 - i, 2, 0, Math.PI * 2);
      }
      c.stroke();
    }
    const box = {
      x: 125,
      y: 175,
      w: 50,
      h: 25,
      draw(x, y) {
        c.lineWidth = "2";
        c.clearRect(x, y, this.w, this.h);
        c.rect(x, y, this.w, this.h);
        c.stroke();
      },
    };
    function animateBox() {
      box.draw();
      box.x += 1;
    }
    if (wrongGuesses >= 5) {
      // box.draw(200, 175);
      window.requestAnimationFrame(animateBox);
      setTimeout(() => dispatch(setGameLost(true)), 2000);
    } else {
      //box

      box.draw(125, 175);

      // c.lineWidth = "2";
      // c.clearRect(125, 175, 50, 25);
      // c.rect(125, 175, 50, 25);
      // c.stroke();
    }
  }, [wrongGuesses]);

  return (
    <>
      <canvas ref={canvasRef} width="300" height="300" />
    </>
  );
};

export default Canvas;
