import React from "react";
import "./SkillCard.css";
const SkillCard = ({ title, iconUrl, isActive, onClick }) => {
  return (
    <div
      className={`skills-card ${isActive ? "active" : ""}`}
      onClick={() => onClick()}
    >
      <div className="skill-icon"></div>
    </div>
  );
};

export default SkillCard;
