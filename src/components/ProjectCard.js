// src/components/ProjectCard.js
import React from 'react';
// Import FaYoutube
import { FaGithub, FaYoutube } from 'react-icons/fa';

const ProjectCard = ({ project }) => {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
      {project.image && (
        <img
          className="h-48 w-full object-cover"
          src={project.image}
          alt={`Project screenshot for ${project.title}`}
        />
      )}
      
      <div className="flex flex-grow flex-col p-6">
        <h3 className="text-xl font-bold text-slate-800">{project.title}</h3>
        <p className="mt-2 flex-grow text-base text-slate-600">
          {project.description}
        </p>

        <div className="my-4">
          <p className="font-semibold text-slate-700 mb-2">Key Features:</p>
          <ul className="list-disc list-inside space-y-1 text-slate-600">
            {project.highlights.map((highlight, index) => (
              <li key={index}>{highlight}</li>
            ))}
          </ul>
        </div>

        <div className="py-4">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="mb-2 mr-2 inline-block rounded-full bg-slate-200 px-3 py-1 text-sm font-semibold text-slate-700"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-auto border-t border-slate-200 pt-4">
          <div className="flex justify-center space-x-4">
            {project.demoLink && (
              <a
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center rounded-md bg-red-600 px-4 py-2 text-sm font-semibold text-white transition-all hover:bg-red-700"
              >
                <FaYoutube className="mr-2" />
                View Demo
              </a>
            )}
            {project.repoLink && (
              <a
                href={project.repoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center rounded-md bg-slate-600 px-4 py-2 text-sm font-semibold text-white transition-all hover:bg-slate-700"
              >
                <FaGithub className="mr-2" />
                Repository
              </a>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProjectCard;