import React, { useEffect, useRef } from "react";
import anime from "animejs";
import "./animeDesign.css";

const AnimeDesign = () => {
  const animationRef = useRef(null);

  useEffect(() => {
    anime({
      targets: animationRef.current,
      translateY: [50, 0], // Move from bottom to top
      opacity: [0, 1], // Fade in
      easing: "easeOutExpo",
      duration: 2000, // 2 seconds
      delay: anime.stagger(200), // Delay each element
    });
  }, []);

  return (
    <div ref={animationRef} className="animated-container">
      <h2 className="animated-text">Welcome to Our Website</h2>
      <p className="animated-text">We Follow the Easy Working Steps</p>
    </div>
  );
};

export default AnimeDesign;
