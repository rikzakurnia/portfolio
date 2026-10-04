// src/components/ProjectCard.js
import React from 'react';

// Split "Smart Photo Storage (In Development)" into the name and its status.
const splitTitle = (title) => {
  const match = title.match(/^(.*?)\s*\((.*)\)$/);
  return match ? [match[1], match[2]] : [title, null];
};

const ProjectCard = ({ project, featured = false }) => {
  // Only the flagship carries a status in its title, e.g. "(In Development)".
  const [name, status] = featured ? splitTitle(project.title) : [project.title, null];
  const primaryLink = project.demoLink || project.repoLink;
  const hasImage = Boolean(project.image);

  const image = hasImage && (
    <a
      href={primaryLink || undefined}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Open ${name}`}
      className={`block overflow-hidden rounded-md border-2 border-gray-200/60 ${
        featured ? 'mb-8' : 'self-start md:col-span-2'
      }`}
    >
      <img
        src={project.image}
        alt={name}
        loading="lazy"
        className={`w-full object-cover object-top transition-transform duration-500 hover:scale-[1.03] ${
          featured ? 'aspect-[2/1]' : 'aspect-video'
        }`}
      />
    </a>
  );

  return (
    <article className={featured ? '' : `grid gap-6 ${hasImage ? 'md:grid-cols-5' : ''}`}>
      {image}
      <div className={hasImage && !featured ? 'md:col-span-3' : ''}>
        {status && <p className="mb-1 text-sm font-medium text-gray-500">{status}</p>}
        <h3 className={`font-bold tracking-tight text-gray-900 ${featured ? 'text-3xl' : 'text-2xl leading-8'}`}>
          {name}
        </h3>
        <div className="mt-1 flex flex-wrap">
          {project.technologies.map((tech) => (
            <span key={tech} className="mr-3 text-sm font-medium uppercase text-green-600">
              {tech.split(' ').join('-')}
            </span>
          ))}
        </div>

        <p className="mt-4 leading-7 text-gray-500">{project.description}</p>

        <ul className="mt-4 list-disc space-y-1 pl-5 leading-7 text-gray-500 marker:text-gray-300">
          {project.highlights.map((h) => (
            <li key={h}>{h}</li>
          ))}
        </ul>

        {(project.demoLink || project.repoLink) && (
          <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 font-medium">
            {project.demoLink && (
              <a
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 hover:text-green-700"
                aria-label={`Watch the demo of ${name}`}
              >
                Watch demo &rarr;
              </a>
            )}
            {project.repoLink && (
              <a
                href={project.repoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 hover:text-green-700"
                aria-label={`Source code of ${name}`}
              >
                Source code &rarr;
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
};

export default ProjectCard;
