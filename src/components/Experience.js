import React from "react";
import ExperienceCard from "./ExperienceCard";
import experiences from "../data/experienceData";

const Experience = () => {
    return (
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-6">Experience</h1>
        {experiences.map((experience, index) => (
          <ExperienceCard key={index} experience={experience} />
        ))}
      </div>
    );
  };
  
  export default Experience;