// src/components/Projects.js
import React from 'react';
import { motion } from 'framer-motion';
import projectsData from '../data/projectsData';
import ProjectCard from './ProjectCard';
import PageHeader from './PageHeader';
import PageFooter from './PageFooter';
import SectionHeading from './SectionHeading';

const Projects = () => {
  const flagshipProject = projectsData.find((p) => p.isFlagship);
  const highlightedProjects = projectsData.filter((p) => p.category === 'highlighted' && !p.isFlagship);
  const otherProjects = projectsData.filter((p) => p.category === 'other' && !p.isFlagship);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
      <PageHeader title="Projects">
        Things I have built on my own, with a team, or as part of a course.
      </PageHeader>

      <SectionHeading>Flagship Project</SectionHeading>
      <div className="py-8">
        {flagshipProject ? (
          <ProjectCard project={flagshipProject} featured />
        ) : (
          <p className="text-gray-500">A new project is under construction. Coming soon!</p>
        )}
      </div>

      {highlightedProjects.length > 0 && (
        <>
          <SectionHeading>Highlighted Projects</SectionHeading>
          <ul className="divide-y divide-gray-200">
            {highlightedProjects.map((project) => (
              <li key={project.id} className="py-10">
                <ProjectCard project={project} />
              </li>
            ))}
          </ul>
        </>
      )}

      {otherProjects.length > 0 && (
        <>
          <SectionHeading>Other Projects</SectionHeading>
          <ul className="divide-y divide-gray-200">
            {otherProjects.map((project) => (
              <li key={project.id} className="py-10">
                <ProjectCard project={project} />
              </li>
            ))}
          </ul>
        </>
      )}

      <PageFooter />
    </motion.div>
  );
};

export default Projects;
