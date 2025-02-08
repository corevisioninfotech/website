import React, { useEffect, useRef } from "react";
import './animatedCanvas.css';

const AnimatedCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = 400; // Adjust as needed

    const count = 100;
    const c = 1 / count;

    function lerp(a, b, t) {
      return a + (b - a) * t;
    }

    function easeQuintIn(t, b, c, d) {
      return c * (t /= d) * t * t * t * t + b;
    }

    function easeQuintOut(t, b, c, d) {
      return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
    }

    function line(x1, y1, x2, y2) {
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.stroke();
    }

    function draw() {
      ctx.clearRect(0, 0, width, height);
      ctx.strokeStyle = "#01A3FF";

      let time_ = Date.now() * 0.0001;

      for (let i = 0; i < count; i++) {
        let t_ = i * c;
        let time = (time_ + t_) % 1;
        let t = easeQuintIn(time, 0, 1, 1);
        let ty = easeQuintOut(t, 0, 1, 1);

        let x = lerp(width, 0, t);
        let y = ty * height * 0.4;

        line(x, y, x, height - y);
      }

      requestAnimationFrame(draw);
    }

    draw();

    window.addEventListener("resize", () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = 400;
    });

    return () => {
      window.removeEventListener("resize", () => {});
    };
  }, []);

  return <canvas ref={canvasRef} className="animated-canvas" />;
};

export default AnimatedCanvas;