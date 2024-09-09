import React from "react";
import "./Skills.css";
import { skills } from "../../utils/data";
import SkillCard from "./SkillCard/SkillCard";
const Skills = () => {
  return (
    <>
      <section className="skills-container">
        <h5>Technical Proficiency</h5>
        <div className="skill-content">
          <div className="skills">
            {skills.map((item) => (
              <SkillCard
                key={item.title}
                iconUrl={item.icon}
                title={item.title}
              />
            ))}
            <div className="skills-info"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
