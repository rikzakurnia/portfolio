// src/components/ExperienceCard.js
import React from 'react';

const ExperienceCard = ({ experience, isLast }) => {
  const isCurrent = /present/i.test(experience.duration);

  return (
    <div className="relative grid gap-4 pb-10 sm:grid-cols-[9rem_1fr] sm:gap-8">
      {/* Date column */}
      <div className="hidden pt-4 text-right sm:block">
        <p className="font-mono text-xs text-muted">{experience.duration}</p>
      </div>

      <div className="relative pl-14 sm:pl-16">
        {/* Timeline rail + node */}
        {!isLast && <span aria-hidden className="absolute bottom-[-2.5rem] left-[19px] top-14 w-px bg-line sm:left-[23px]" />}
        <span className="absolute left-0 top-3 flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-line bg-white p-1 shadow-card sm:h-12 sm:w-12">
          <img
            src={experience.companyLogo}
            alt={`${experience.company} logo`}
            className="h-full w-full rounded-full object-contain"
          />
        </span>

        <div className="card p-6 transition duration-300 hover:shadow-lift">
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="text-lg font-semibold tracking-tight">{experience.jobTitle}</h3>
            {isCurrent && (
              <span className="flex items-center gap-1.5 rounded-full bg-accent/10 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-accent">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
                Current
              </span>
            )}
          </div>
          <p className="mt-1 text-sm font-medium text-ink/80">{experience.company}</p>
          <p className="mt-1 font-mono text-xs text-muted sm:hidden">{experience.duration}</p>
          <p className="mt-4 leading-relaxed text-muted">{experience.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
