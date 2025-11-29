// src/components/Projects.js
import React from 'react';
import { motion } from 'framer-motion';
import projectsData from '../data/projectsData';
import ProjectCard from './ProjectCard';

const Projects = () => {
  // Filter project data
  const flagshipProject = projectsData.find((p) => p.isFlagship);
  const highlightedProjects = projectsData.filter(
    (p) => p.category === 'highlighted' && !p.isFlagship
  );
  const otherProjects = projectsData.filter(
    (p) => p.category === 'other' && !p.isFlagship
  );

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <motion.div
      className="bg-slate-50 p-8"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* TITLE */}
      {/* <motion.h1
        className="mb-12 text-center text-4xl font-extrabold text-slate-900"
        variants={itemVariants}
      >
        My Projects
      </motion.h1> */}

      {/* FLAGSHIP PROJECT */}
      <motion.div className="mb-20" variants={itemVariants}>
        <h2 className="mb-2 text-3xl font-bold text-slate-800  pb-2 inline-block">
          Flagship Project
        </h2>

        <div className="mt-2">
          {flagshipProject ? (
            <ProjectCard project={flagshipProject} />
          ) : (
            <div className="rounded-lg border-2 border-dashed border-slate-300 bg-white p-12 text-center">
              <p className="text-slate-500">
                🚀 A new exciting project is under construction. Coming soon!
              </p>
            </div>
          )}
        </div>
      </motion.div>

      {/* HIGHLIGHTED PROJECTS */}
      {highlightedProjects.length > 0 && (
        <motion.div className="mb-20" variants={containerVariants}>
          <motion.h2
            className="mb-8 text-3xl font-bold text-slate-800"
            variants={itemVariants}
          >
            Highlighted Projects
          </motion.h2>

          <div className="flex flex-col gap-12">
            {highlightedProjects.map((project) => (
              <motion.div key={project.id} variants={itemVariants}>
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}

      {/* OTHER PROJECTS */}
      {otherProjects.length > 0 && (
        <motion.div variants={containerVariants}>
          <motion.h2
            className="mb-8 text-3xl font-bold text-slate-800"
            variants={itemVariants}
          >
            Other Projects
          </motion.h2>

          <div className="flex flex-col gap-10">
            {otherProjects.map((project) => (
              <motion.div key={project.id} variants={itemVariants}>
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Projects;
