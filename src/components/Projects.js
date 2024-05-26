// src/components/Projects.js
import React from 'react';
import projectsData from '../data/projectsData';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const largeProjects = projectsData.filter(project => project.size === 'large');
  const miniProjects = projectsData.filter(project => project.size === 'mini');
  const groupProjects = projectsData.filter(project => project.size === 'group');

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6">Projects</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {largeProjects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
      
      <h3 className="text-2xl font-bold mb-8">Group Projects</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {groupProjects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>

      <h3 className="text-2xl font-bold mb-4">Smaller Projects</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {miniProjects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>

    </div>
  );
};

export default Projects;
