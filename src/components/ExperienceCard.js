// src/components/ExperienceCard.js
import React from 'react';

const ExperienceCard = ({ experience, isLast }) => {
  return (
    <div className="relative flex items-start">

      <div className="flex flex-col items-center mr-6">

        <div className="flex-shrink-0 bg-white rounded-full shadow-md w-16 h-16 flex items-center justify-center">
          <img
            src={experience.companyLogo}
            alt={`${experience.company} logo`}
            className="w-14 h-14 object-contain rounded-full"
          />
        </div>

        {!isLast && <div className="w-px h-full bg-slate-300 mt-2"></div>}
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md w-full mb-8">
        <h3 className="text-xl font-bold text-slate-800">{experience.jobTitle}</h3>
        <p className="text-md text-slate-600 font-semibold">{experience.company}</p>
        <p className="text-sm text-slate-500 mb-4">{experience.duration}</p>
        <p className="text-slate-700 text-base text-justify">
          {experience.description}
        </p>
      </div>
    </div>
  );
};

export default ExperienceCard;