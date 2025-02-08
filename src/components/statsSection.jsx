import React, { useEffect, useRef } from "react";
import anime from "animejs";
import "../styles/statsSection.css"; // External CSS for styling

const statsData = [
  { value: `60+`, label: "Projects", description: "We are spread around the world." },
  { value: `60+`, label: "Client Satisfaction", description: "Our clients are happy with our service" },
  { value: `25+`, label: "Country's Customer", description: "Our customers are from many countries" },
  { value: `2022+`, label: "We Established On", description: "Our company has a great history" },
];

const StatsSection = () => {
  const statRefs = useRef([]);

  useEffect(() => {
    statRefs.current.forEach((el, index) => {
      anime({
        targets: el,
        innerHTML: [0, statsData[index].value], // Animate from 0 to final value
        easing: "linear",
        round: 1, // Round to the nearest whole number
        duration: 2000, // Animation duration in milliseconds
      });
    });
  }, []);

  return (
    <div className="stats-container">
      {statsData.map((stat, index) => (
        <div key={index} className="stat-card">
          <h2 ref={(el) => (statRefs.current[index] = el)} className="stat-value">
            0
          </h2>
          <h3 className="stat-label">{stat.label}</h3>
          <p className="stat-description">{stat.description}</p>
        </div>
      ))}
    </div>
  );
};

export default StatsSection;
