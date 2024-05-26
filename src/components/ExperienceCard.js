import React from 'react';

const ExperienceCard = ({ experience }) => {
    return (
    <div className="bg-white shadow-lg border-b-2 rounded-lg overflow-hidden p-4 mb-4 border-b border-gray-200">
        <div className="flex items-center">
          <img
            src={experience.companyLogo}
            alt={experience.company}
            className="w-16 h-16 object-cover rounded-full mr-4"
          />
          <div>
            <h3 className="text-xl font-bold mb-1">{experience.jobTitle}</h3>
            <p className="text-gray-600 mb-1">{experience.company}</p>
            <p className="text-gray-500">{experience.duration}</p>
          </div>
        </div>
        <p className="cursor-default text-gray-700 mt-4">{experience.description}</p>
      </div>
    );
};

export default ExperienceCard;