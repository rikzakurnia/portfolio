import React from 'react';

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-white-300 shadow-xl rounded-lg border-b-2 border-double border-green-500 overflow-hidden hover:scale-105">
      <div className="p-4">
        <h3 className="text-xl text-green-500 font-bold mb-2">{project.title}</h3>
        <p className="text-black mb-4">{project.description}</p>
        <div className="mb-4">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            >
              {tech}
            </span>
          ))}
        </div>
        {project.size === 'large' && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-700"
          >
            View Project
          </a>
        )}
        {project.size !== 'large' && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-700"
          >
            View Repository
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
