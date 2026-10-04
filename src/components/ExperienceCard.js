// src/components/ExperienceCard.js
import React from 'react';

const ExperienceCard = ({ experience }) => (
  <article className="grid gap-3 md:grid-cols-4 md:gap-8">
    <p className="font-medium leading-7 text-gray-500 md:pt-1">{experience.duration}</p>
    <div className="md:col-span-3">
      <div className="flex items-center gap-4">
        <img
          src={experience.companyLogo}
          alt={`${experience.company} logo`}
          className="h-12 w-12 shrink-0 rounded-full border border-gray-200 bg-white object-contain p-0.5"
        />
        <div>
          <h3 className="text-xl font-bold leading-7 tracking-tight text-gray-900">{experience.jobTitle}</h3>
          <p className="font-medium text-gray-600">{experience.company}</p>
        </div>
      </div>
      <p className="mt-4 leading-7 text-gray-500">{experience.description}</p>
    </div>
  </article>
);

export default ExperienceCard;
