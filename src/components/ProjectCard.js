// src/components/ProjectCard.js
import React from "react";
import { FaGithub, FaYoutube } from "react-icons/fa";

const ProjectCard = ({ project }) => {
  return (
    <div className="w-full flex flex-col md:flex-row bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
      
      {/* IMAGE SECTION */}
      {project.image && (
        <div className="md:w-1/3 w-full h-56 md:h-auto">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      {/* CONTENT SECTION */}
      <div className="flex flex-col p-6 md:w-2/3">
        <h3 className="text-2xl font-bold text-slate-800">{project.title}</h3>

        <p className="mt-2 text-slate-600">{project.description}</p>

        {/* HIGHLIGHTS */}
        <div className="my-4">
          <p className="font-semibold text-slate-700 mb-2">Key Features:</p>
          <ul className="list-disc list-inside space-y-1 text-slate-600">
            {project.highlights.map((h, i) => (
              <li key={i}>{h}</li>
            ))}
          </ul>
        </div>

        {/* TECHNOLOGIES */}
        <div className="flex flex-wrap gap-2 py-2">
          {project.technologies.map((tech, i) => (
            <span
              key={i}
              className="rounded-full bg-slate-200 px-3 py-1 text-sm font-medium text-slate-700"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* BUTTONS */}
        <div className="mt-auto pt-4 border-t border-slate-200">
          <div className="flex flex-wrap gap-4">
            {project.demoLink && (
              <a
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center rounded-md bg-red-600 px-4 py-2 text-sm font-semibold text-white hover:bg-red-700 transition"
              >
                <FaYoutube className="mr-2" /> View Demo
              </a>
            )}

            {project.repoLink && (
              <a
                href={project.repoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center rounded-md bg-slate-600 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-700 transition"
              >
                <FaGithub className="mr-2" /> Repository
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
